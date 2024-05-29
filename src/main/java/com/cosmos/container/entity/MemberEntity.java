package com.cosmos.container.entity;

import com.cosmos.container.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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

    public void initMemberEntity(MemberDTO memberDTO){
        this.id = memberDTO.getId();
        this.memberAddress = memberDTO.getMemberAddress();
        this.companyName = memberDTO.getCompanyName();
        this.companyPresident = memberDTO.getCompanyPresident();
    }
}
