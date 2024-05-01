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
    private String id;
    private String password;
    private String email;
    private String managerName;
    private String managerDepart;
    private String managerPosition;

    public static ManagerDTO toManagerDTO(ManagerEntity managerEntity) {
        ManagerDTO managerDTO = new ManagerDTO();
        managerDTO.setManagerName(managerEntity.getManagerName());
        managerDTO.setManagerDepart(managerEntity.getManagerDepart());
        managerDTO.setManagerPosition(managerEntity.getManagerPosition());
        return managerDTO;
    }
}
