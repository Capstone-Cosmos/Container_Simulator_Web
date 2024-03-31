package com.cosmos.container.service;

import com.cosmos.container.dto.CustomUserDetails;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberLoginService implements UserDetailsService {

    private final MemberRepository memberRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new CustomUserDetails(memberRepository.findByMemberId(username)
                .orElseThrow(()-> new UsernameNotFoundException("Invalid")));
    }
}
