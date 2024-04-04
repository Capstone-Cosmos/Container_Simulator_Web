package com.cosmos.container.service;

import com.cosmos.container.entity.RefreshEntity;
import com.cosmos.container.jwt.JWTUtil;
import com.cosmos.container.repository.RefreshRepository;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
@RequiredArgsConstructor
public class SecurityService {

    private final JWTUtil jwtUtil;
    private final RefreshRepository refreshRepository;

    public ResponseEntity<?> reissue(HttpServletRequest request, HttpServletResponse response){
        //Get Refresh Token
        String refreshToken = null;
        Cookie[] cookies = request.getCookies();

        for(Cookie cookie:cookies){
            if(cookie.getName().equals("refresh")){
                refreshToken = cookie.getValue();
            }
        }

        if(refreshToken == null){
            return new ResponseEntity<>("Refresh Token Null", HttpStatus.BAD_REQUEST);
        }

        //Expired Check
        try{
            jwtUtil.isExpired(refreshToken);
        } catch (ExpiredJwtException e){
            return new ResponseEntity<>("Refresh Token Expired", HttpStatus.BAD_REQUEST);
        }

        // Check category and Refresh Repository
        String category = jwtUtil.getCategory(refreshToken);
        Boolean isExist = refreshRepository.existsByRefresh(refreshToken);
        if(!category.equals("refresh") || !isExist){
            return new ResponseEntity<>("Invalid Refresh Token", HttpStatus.BAD_REQUEST);
        }

        String username = jwtUtil.getUsername(refreshToken);
        String role = jwtUtil.getRole(refreshToken);

        //Make new Access Token
        String newAccess = jwtUtil.creatJwt("access", username, role, 600000L);
        String newRefresh = jwtUtil.creatJwt("refresh", username, role, 86400000L);

        //Update Refresh Token
        refreshRepository.deleteByRefresh(refreshToken);
        addRefreshEntity(username, newRefresh, 86400000L);

        //Response
        response.setHeader("access", newAccess);
        response.addCookie(createCookie("refreshToken", newRefresh));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    private Cookie createCookie(String key, String value) {
        Cookie cookie = new Cookie(key, value);
        cookie.setMaxAge(24*60*60);
        cookie.setHttpOnly(true);

        return cookie;
    }

    private void addRefreshEntity(String username, String refresh, Long expiredMs){
        Date date = new Date(System.currentTimeMillis() + expiredMs);

        RefreshEntity refreshEntity = new RefreshEntity();
        refreshEntity.setUsername(username);
        refreshEntity.setRefresh(refresh);
        refreshEntity.setExpiration(date.toString());

        refreshRepository.save(refreshEntity);
    }
}
