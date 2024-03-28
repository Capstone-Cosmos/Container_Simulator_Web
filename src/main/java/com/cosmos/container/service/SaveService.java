package com.cosmos.container.service;

import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.entity.ManagerEntity;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.repository.ManagerRepository;
import com.cosmos.container.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaveService {

    private final MemberRepository memberRepository;
    private final ManagerRepository managerRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public String checkMemberId(String memberId){
        boolean checked = memberRepository.existsByMemberId(memberId);
        if(checked)
            return "invalid";
        else
            return "valid";
    }

    public String checkMemberEmail(String memberEmail){
        boolean checked = memberRepository.existsByMemberEmail(memberEmail);
        if(checked)
            return "invalid";
        else
            return "valid";
    }

    public String checkManagerId(String managerId){
        boolean checked = managerRepository.existsByManagerId(managerId);
        if(checked)
            return "invalid";
        else
            return "valid";
    }

    public String checkManagerEmail(String managerEmail){
        boolean checked = managerRepository.existsByManagerEmail(managerEmail);
        if(checked)
            return "invalid";
        else
            return "valid";
    }

    public void saveMember(MemberDTO memberDTO) {
        // 1. dto -> entity 변환
        // 2. repository의 save메서드 호출
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberEntity.setMemberPassword(bCryptPasswordEncoder.encode(memberDTO.getMemberPassword()));
        memberRepository.save(memberEntity);
        // repository의 save메서드 호출(. entity객체를 넘겨줘야함)
    }

    public void saveManager(ManagerDTO managerDTO){
        ManagerEntity managerEntity = ManagerEntity.toMemberEntity(managerDTO);
        managerEntity.setManagerPassword(bCryptPasswordEncoder.encode(managerDTO.getManagerPassword()));
        managerRepository.save(managerEntity);
    }
}
