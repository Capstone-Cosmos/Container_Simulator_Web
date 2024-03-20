package com.cosmos.container.service;

import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.entity.MemberEntity;
import com.cosmos.container.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SaveService {

    private final MemberRepository memberRepository;
    public void save(MemberDTO memberDTO) {
        // 1. dto -> entity 변환
        // 2. repository의 save메서드 호출
        MemberEntity memberEntity = MemberEntity.toMemberEntity(memberDTO);
        memberRepository.save(memberEntity);
        // repository의 save메서드 호출(. entity객체를 넘겨줘야함)
    }
}
