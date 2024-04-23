package com.cosmos.container.dto;

import com.cosmos.container.entity.ContainerEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ContainerDTO {

    private String managerId;
    private int weight;
    private int max_weight;
    private LocalDateTime deadline;

    public static ContainerDTO toContainerDTO(ContainerEntity containerEntity) {
        ContainerDTO containerDTO = new ContainerDTO();
        containerDTO.setManagerId(containerEntity.getManagerId());
        containerDTO.setWeight(containerEntity.getWeight());
        containerDTO.setMax_weight(containerEntity.getMax_weight());
        containerDTO.setDeadline(containerEntity.getDeadline());
        return containerDTO;
    }

}
