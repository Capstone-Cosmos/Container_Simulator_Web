package com.cosmos.container.dto;

import com.cosmos.container.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
    private String id;
    private String password;
    private String email;
    private String memberAddress;
    private String companyName;
    private String companyPresident;
}