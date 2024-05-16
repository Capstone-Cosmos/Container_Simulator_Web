package com.cosmos.container.dto;

import com.cosmos.container.constant.ContainerType;
import com.cosmos.container.entity.ContainerEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ContainerDTO {
    private long id;
    private String containerName;
    private int weight;
    private ContainerType containerType;
    private LocalDateTime deadline;
    private String startingPoint;
    private String destination;

    public static ContainerDTO toContainerDTO(ContainerEntity containerEntity) {
        ContainerDTO containerDTO = new ContainerDTO();
        containerDTO.setId(containerEntity.getId());
        containerDTO.setContainerName(containerEntity.getContainerName());
        containerDTO.setWeight(containerEntity.getWeight());
        containerDTO.setContainerType(containerEntity.getContainerType());
        containerDTO.setDeadline(containerEntity.getDeadline());
        containerDTO.setStartingPoint(containerEntity.getStartingPoint());
        containerDTO.setDestination(containerEntity.getDestination());
        return containerDTO;
    }

}
