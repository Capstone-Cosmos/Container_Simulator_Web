package com.cosmos.container.entity;

import com.cosmos.container.constant.ContainerType;
import com.cosmos.container.dto.ContainerDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
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
    private float weight;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ContainerType containerType;

    @Column(nullable = false)
    private LocalDateTime deadline;

    @Column(nullable = false)
    private String startingPoint;

    @Column(nullable = false)
    private String destination;

    public void initContainer(ContainerDTO containerDTO, String username) {
        this.id = containerDTO.getId();
        this.managerId = username;
        this.containerName = containerDTO.getContainerName();
        this.weight = 0;
        this.containerType = ContainerType.valueOf(containerDTO.getContainerType());
        this.deadline = containerDTO.getDeadline();
        this.startingPoint = containerDTO.getStartingPoint();
        this.destination = containerDTO.getDestination();
    }

    public void addWeight(float weight) {
        this.weight += weight;
    }

    public void loseWeight(float weight) {
        this.weight -= weight;
    }
}
