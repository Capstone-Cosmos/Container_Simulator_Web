package com.cosmos.container.dto;

import com.cosmos.container.entity.ManagerEntity;
import com.cosmos.container.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class ManagerDTO {
    private String id;
    private String password;
    private String email;
    private String managerName;
    private String managerDepart;
    private String managerPosition;
}
