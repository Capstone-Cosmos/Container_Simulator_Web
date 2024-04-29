package com.cosmos.container.entity;

import com.cosmos.container.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "member_table")
public class MemberEntity extends BaseEntity {

    @Id// pk 지정
    @Column(nullable = false)
    private String memberId;

    @Column(unique = true, nullable = false)
    private String memberEmail;

    @Column(nullable = false)
    private String memberAddress;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String companyPresident;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberId(memberDTO.getMemberId());
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberAddress(memberDTO.getMemberAddress());
        memberEntity.setCompanyName(memberDTO.getCompanyName());
        memberEntity.setCompanyPresident(memberDTO.getCompanyPresident());
        return memberEntity;
    }
}
