package com.cosmos.container.jwt;

import com.cosmos.container.dto.CustomUserDetails;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.entity.UserInfoEntity;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.io.PrintWriter;

@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // access token load
        String accessToken = request.getHeader("access");

        if(accessToken == null){
            filterChain.doFilter(request, response);
            return;
        }

        try{
            jwtUtil.isExpired(accessToken);
        } catch (ExpiredJwtException e){
            // response body
            PrintWriter writer = response.getWriter();
            writer.print("Access Token Expired");

            // response status
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            return;
        }

        // Access Token 검증
        String category = jwtUtil.getCategory(accessToken);
        if(!category.equals("access")){
            // response body
            PrintWriter writer = response.getWriter();
            writer.print("Invalid Token Expired");

            // response status
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);

            return;
        }

        // username, role load
        String username = jwtUtil.getUsername(accessToken);
        String role = jwtUtil.getRole(accessToken);

        UserInfoEntity userInfoEntity = new UserInfoEntity();
        userInfoEntity.setUsername(username);
        userInfoEntity.setRole(role);

        CustomUserDetails customUserDetails = new CustomUserDetails(userInfoEntity);

        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);
    }
}
