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
    private String id;

    @Column(nullable = false)
    private String memberAddress;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String companyPresident;

    public static MemberEntity toMemberEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setId(memberDTO.getId());
        memberEntity.setMemberAddress(memberDTO.getMemberAddress());
        memberEntity.setCompanyName(memberDTO.getCompanyName());
        memberEntity.setCompanyPresident(memberDTO.getCompanyPresident());
        return memberEntity;
    }
}
