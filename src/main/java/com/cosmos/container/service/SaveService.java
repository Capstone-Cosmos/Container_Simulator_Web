package com.cosmos.container.service;

import com.cosmos.container.constant.Role;
import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.entity.ManagerEntity;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.entity.UserInfoEntity;
import com.cosmos.container.repository.ManagerRepository;
import com.cosmos.container.repository.MemberRepository;
import com.cosmos.container.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaveService {
    private final UserInfoRepository userInfoRepository;
    private final MemberRepository memberRepository;
    private final ManagerRepository managerRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;


    public boolean checkId(String username){
        return userInfoRepository.existsByUsername(username);
    }

    public boolean checkEmail(String email){
        return userInfoRepository.existsByEmail(email);
    }

    public void saveMember(MemberDTO memberDTO) {
        UserInfoEntity userInfoEntity = UserInfoEntity.toUserInfoEntity(
                memberDTO.getId(), bCryptPasswordEncoder.encode(memberDTO.getPassword()), memberDTO.getEmail(), Role.ROLE_MEMBER);
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        userInfoRepository.save(userInfoEntity);
        memberRepository.save(memberEntity);
    }

    public void saveManager(ManagerDTO managerDTO){
        UserInfoEntity userInfoEntity = UserInfoEntity.toUserInfoEntity(
                managerDTO.getId(), bCryptPasswordEncoder.encode(managerDTO.getPassword()), managerDTO.getEmail(), Role.ROLE_MANAGER);
        ManagerEntity managerEntity = ManagerEntity.toMemberEntity(managerDTO);
        userInfoRepository.save(userInfoEntity);
        managerRepository.save(managerEntity);
    }
}
