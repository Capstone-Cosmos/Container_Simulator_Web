package com.cosmos.container.entity;

import com.cosmos.container.dto.ManagerDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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

    public void initManagerEntity(ManagerDTO managerDTO){
        this.id = managerDTO.getId();
        this.managerName = managerDTO.getManagerName();
        this.managerDepart = managerDTO.getManagerDepart();
        this.managerPosition = managerDTO.getManagerPosition();
    }
}
