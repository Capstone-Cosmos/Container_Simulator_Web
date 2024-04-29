package com.cosmos.container.service;

import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.entity.ManagerEntity;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.entity.UserInfoEntity;
import com.cosmos.container.repository.ManagerRepository;
import com.cosmos.container.repository.MemberRepository;
import com.cosmos.container.repository.UserInfoRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaveService {
    private final UserInfoRepository userInfoRepository;
    private final MemberRepository memberRepository;
    private final ManagerRepository managerRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public boolean checkMemberId(String memberId){
        return memberRepository.existsByMemberId(memberId);
    }

    public boolean checkMemberEmail(String memberEmail){
        return memberRepository.existsByMemberEmail(memberEmail);
    }

    public boolean checkManagerId(String managerId){
        return managerRepository.existsByManagerId(managerId);
    }

    public boolean checkManagerEmail(String managerEmail){
        return managerRepository.existsByManagerEmail(managerEmail);
    }

    public void saveMember(MemberDTO memberDTO) {
        UserInfoEntity userInfoEntity = UserInfoEntity.toUserInfoEntity(
                memberDTO.getMemberId(), bCryptPasswordEncoder.encode(memberDTO.getMemberPassword()), "ROLE_MEMBER");
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        userInfoRepository.save(userInfoEntity);
        memberRepository.save(memberEntity);
    }

    public void saveManager(ManagerDTO managerDTO){
        UserInfoEntity userInfoEntity = UserInfoEntity.toUserInfoEntity(
                managerDTO.getManagerId(), bCryptPasswordEncoder.encode(managerDTO.getManagerPassword()), "ROLE_MANAGER");
        ManagerEntity managerEntity = ManagerEntity.toMemberEntity(managerDTO);
        userInfoRepository.save(userInfoEntity);
        managerRepository.save(managerEntity);
    }
}
