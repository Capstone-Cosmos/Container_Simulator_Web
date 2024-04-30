package com.cosmos.container.entity;

import com.cosmos.container.dto.ManagerDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "manager_table")
public class ManagerEntity extends BaseEntity {
    @Id
    @Column(nullable = false)
    private String id;

    @Column(nullable = false)
    private String managerName;

    @Column(nullable = false)
    private String managerDepart;

    @Column(nullable = false)
    private String managerPosition;

    public static ManagerEntity toMemberEntity(ManagerDTO managerDTO){
        ManagerEntity managerEntity = new ManagerEntity();
        managerEntity.setId(managerDTO.getId());
        managerEntity.setManagerName(managerDTO.getManagerName());
        managerEntity.setManagerDepart(managerDTO.getManagerDepart());
        managerEntity.setManagerPosition(managerDTO.getManagerPosition());
        return managerEntity;
    }
}
