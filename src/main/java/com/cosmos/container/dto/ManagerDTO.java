package com.cosmos.container.dto;

import com.cosmos.container.entity.ManagerEntity;
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

    public static ManagerDTO toManagerDTO(ManagerEntity managerEntity) {
        ManagerDTO managerDTO = new ManagerDTO();
        managerDTO.setManagerId(managerEntity.getManagerId());
        managerDTO.setManagerPassword(managerEntity.getManagerPassword());
        managerDTO.setManagerEmail(managerEntity.getManagerEmail());
        managerDTO.setManagerName(managerEntity.getManagerName());
        managerDTO.setManagerDepart(managerEntity.getManagerDepart());
        managerDTO.setManagerPosition(managerEntity.getManagerPosition());
        return managerDTO;
    }
}
