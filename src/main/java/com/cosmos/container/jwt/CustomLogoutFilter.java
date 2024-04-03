package com.cosmos.container.jwt;

import com.cosmos.container.repository.RefreshRepository;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.web.filter.GenericFilterBean;

import java.io.IOException;

@RequiredArgsConstructor
public class CustomLogoutFilter extends GenericFilterBean {

    private final JWTUtil jwtUtil;
    private final RefreshRepository refreshRepository;

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        doFilter((HttpServletRequest) request, (HttpServletResponse) response, chain);
    }

    private void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws IOException, ServletException{

        //Path & Method verify
        String requestUri = request.getRequestURI();
        String requestMethod = request.getMethod();
        if(!requestUri.matches("^\\/logout$") || !requestMethod.equals("POST")){
            filterChain.doFilter(request, response);
            return;
        }

        //Get Refresh Token
        String refreshToken = null;
        Cookie[] cookies = request.getCookies();

        for(Cookie cookie:cookies){
            if(cookie.getName().equals("refresh")){
                refreshToken = cookie.getValue();
            }
        }

        if(refreshToken == null){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        //Expired Check
        try{
            jwtUtil.isExpired(refreshToken);
        } catch (ExpiredJwtException e){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        // Check category and Refresh Repository
        String category = jwtUtil.getCategory(refreshToken);
        Boolean isExist = refreshRepository.existsByRefresh(refreshToken);
        if(!category.equals("refresh") || !isExist){
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return;
        }

        //Logout
        refreshRepository.deleteByRefresh(refreshToken);

        //Refresh Token Cookie 0 value
        Cookie cookie = new Cookie("refresh", null);
        cookie.setMaxAge(0);
        cookie.setPath("/");

        response.addCookie(cookie);
        response.setStatus(HttpServletResponse.SC_OK);
    }

}
