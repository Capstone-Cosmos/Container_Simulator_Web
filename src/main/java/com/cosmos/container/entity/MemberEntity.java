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
    @GeneratedValue(strategy = GenerationType.IDENTITY) // auto_increment
    private Long id;

    @Column(unique = true)
    private String memberId;

    @Column
    private String memberPassword;

    @Column(unique = true)
    private String memberEmail;

    @Column
    private String memberAddress;

    @Column
    private String companyName;

    @Column
    private String companyPresident;

    @Column
    private String role;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberId(memberDTO.getMemberId());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberEmail(memberDTO.getMemberEmail());
        memberEntity.setMemberAddress(memberDTO.getMemberAddress());
        memberEntity.setCompanyName(memberDTO.getCompanyName());
        memberEntity.setCompanyPresident(memberDTO.getCompanyPresident());
        memberEntity.setRole("ROLE_MEMBER");
        return memberEntity;
    }
}
