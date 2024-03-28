package com.cosmos.container.entity;

import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
@Entity
@Table(name = "manager_table")
public class ManagerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String managerId;

    @Column
    private String managerPassword;

    @Column(unique = true)
    private String managerEmail;

    @Column
    private String managerName;

    @Column
    private String managerDepart;

    @Column
    private String managerPosition;

    @Column
    private String role;

    public static ManagerEntity toMemberEntity(ManagerDTO managerDTO){
        ManagerEntity managerEntity = new ManagerEntity();
        managerEntity.setManagerId(managerDTO.getManagerId());
        managerEntity.setManagerPassword(managerDTO.getManagerPassword());
        managerEntity.setManagerEmail(managerDTO.getManagerEmail());
        managerEntity.setManagerName(managerDTO.getManagerName());
        managerEntity.setManagerDepart(managerDTO.getManagerDepart());
        managerEntity.setManagerPosition(managerDTO.getManagerPosition());
        managerEntity.setRole("ROLE_MANAGER");
        return managerEntity;
    }
}
