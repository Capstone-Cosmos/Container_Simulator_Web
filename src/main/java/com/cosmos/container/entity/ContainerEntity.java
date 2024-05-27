package com.cosmos.container.entity;

import com.cosmos.container.constant.ContainerType;
import com.cosmos.container.dto.ContainerDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@Table(name = "container_table")
public class ContainerEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String managerId;

    @Column(nullable = false)
    private String containerName;

    @Column(nullable = false)
    private float weight = 0;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ContainerType containerType;

    @Column(nullable = false)
    private LocalDateTime deadline;

    @Column(nullable = false)
    private String startingPoint;

    @Column(nullable = false)
    private String destination;

    public static ContainerEntity toContainerEntity(ContainerDTO containerDTO, String username) {
        ContainerEntity containerEntity = new ContainerEntity();
        containerEntity.setId(containerDTO.getId());
        containerEntity.setManagerId(username);
        containerEntity.setContainerName(containerDTO.getContainerName());
        containerEntity.setWeight(containerDTO.getWeight());
        containerEntity.setContainerType(ContainerType.valueOf(containerDTO.getContainerType()));
        containerEntity.setDeadline(containerDTO.getDeadline());
        containerEntity.setStartingPoint(containerDTO.getStartingPoint());
        containerEntity.setDestination(containerDTO.getDestination());
        return containerEntity;
    }
}
