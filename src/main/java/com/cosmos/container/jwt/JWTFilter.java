package com.cosmos.container.jwt;

import com.cosmos.container.dto.CustomUserDetails;
import com.cosmos.container.entity.MemberEntity;
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

@RequiredArgsConstructor
public class JWTFilter extends OncePerRequestFilter {

    private final JWTUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        // request에서 authorization 헤더를 찾음
        String authorization= request.getHeader("Authorization");

        // Authorization 헤더 검증
        if (authorization == null || !authorization.startsWith("Bearer ")){
            System.out.println("token null");
            filterChain.doFilter(request, response);

            return;
        }

        System.out.println("authorization now");
        String token = authorization.split(" ")[1];

        // Token 소멸 시간 검증
        if (jwtUtil.isExpired(token)){
            System.out.println("Token expired");
            filterChain.doFilter(request, response);

            return;
        }

        // Token에서 username 및 role 획득
        String username = jwtUtil.getUsername(token);
        String role = jwtUtil.getRole(token);

        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberId(username);
        memberEntity.setMemberPassword("temppassword");
        memberEntity.setRole(role);

        CustomUserDetails customUserDetails = new CustomUserDetails(memberEntity);

        Authentication authToken = new UsernamePasswordAuthenticationToken(customUserDetails, null, customUserDetails.getAuthorities());

        SecurityContextHolder.getContext().setAuthentication(authToken);

        filterChain.doFilter(request, response);

    }
}
