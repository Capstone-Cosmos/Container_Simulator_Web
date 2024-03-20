package com.cosmos.container.dto;

import com.cosmos.container.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ManagerDTO {
    private long id;
    private String managerId;
    private String managerPassword;
    private String managerEmail;
    private String managerName;
    private String managerDepart;
    private String managerPosition;
}
