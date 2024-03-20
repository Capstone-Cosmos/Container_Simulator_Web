package com.cosmos.container.dto;

import com.cosmos.container.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberDTO {
    private Long id;
    private String memberId;
    private String memberPassword;
    private String memberEmail;
    private String memberAddress;
    private String companyName;
    private String companyPresident;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setId(memberEntity.getId());
        memberDTO.setMemberId(memberEntity.getMemberId());
        memberDTO.setMemberPassword(memberEntity.getMemberPassword());
        memberDTO.setMemberEmail(memberEntity.getMemberEmail());
        memberDTO.setMemberAddress(memberEntity.getMemberAddress());
        memberDTO.setCompanyName(memberEntity.getCompanyName());
        memberDTO.setCompanyPresident(memberEntity.getCompanyPresident());
        return memberDTO;
    }
}