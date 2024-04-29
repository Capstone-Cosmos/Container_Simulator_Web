package com.cosmos.container.service;

import com.cosmos.container.dto.CustomUserDetails;
import com.cosmos.container.repository.MemberRepository;
import com.cosmos.container.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserLoginService implements UserDetailsService {

    private final UserInfoRepository userInfoRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return new CustomUserDetails(userInfoRepository.findByUsername(username)
                .orElseThrow(()-> new UsernameNotFoundException("Invalid")));
    }
}
