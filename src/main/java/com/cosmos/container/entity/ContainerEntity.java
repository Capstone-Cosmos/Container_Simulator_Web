package com.cosmos.container.entity;

import com.cosmos.container.dto.ContainerDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "container_table")
public class ContainerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String managerId;

    @Column(nullable = false)
    private int weight;

    @Column(nullable = false)
    private int max_weight;

    @Column(nullable = false)
    private LocalDateTime deadline;

    public static ContainerEntity toContainerEntity(ContainerDTO containerDTO) {
        ContainerEntity containerEntity = new ContainerEntity();
        containerEntity.setId(containerDTO.getId());
        containerEntity.setWeight(containerDTO.getWeight());
        containerEntity.setDeadline(containerDTO.getDeadline());
        containerEntity.setMax_weight(containerDTO.getMax_weight());
        return containerEntity;
    }
}
