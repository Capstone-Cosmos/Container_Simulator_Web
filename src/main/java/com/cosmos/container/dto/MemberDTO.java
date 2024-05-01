package com.cosmos.container.dto;

import com.cosmos.container.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class MemberDTO {
    private String id;
    private String password;
    private String email;
    private String memberAddress;
    private String companyName;
    private String companyPresident;

    public static MemberDTO toMemberDTO(MemberEntity memberEntity){
        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setMemberAddress(memberEntity.getMemberAddress());
        memberDTO.setCompanyName(memberEntity.getCompanyName());
        memberDTO.setCompanyPresident(memberEntity.getCompanyPresident());
        return memberDTO;
    }
}