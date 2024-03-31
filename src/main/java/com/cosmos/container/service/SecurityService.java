package com.cosmos.container.service;

import com.cosmos.container.jwt.JWTUtil;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SecurityService {

    private final JWTUtil jwtUtil;

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

        // Check category
        String category = jwtUtil.getCategory(refreshToken);
        if(!category.equals("refresh")){
            return new ResponseEntity<>("Invalid Refresh Token", HttpStatus.BAD_REQUEST);
        }

        String username = jwtUtil.getUsername(refreshToken);
        String role = jwtUtil.getRole(refreshToken);

        //Make new Access Token
        String newAccess = jwtUtil.creatJwt("access", username, role, 600000L);

        //Response
        response.setHeader("access", newAccess);

        return new ResponseEntity<>(HttpStatus.OK);
    }
}
