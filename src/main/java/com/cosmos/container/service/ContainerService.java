package com.cosmos.container.service;

import com.cosmos.container.dto.ContainerDTO;
import com.cosmos.container.entity.ContainerEntity;
import com.cosmos.container.repository.ContainerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContainerService {
    private final ContainerRepository containerRepository;

    public String saveContainer(ContainerDTO containerDTO) {
        ContainerEntity containerEntity = ContainerEntity.toContainerEntity(containerDTO);
        containerRepository.save(containerEntity);
        return containerDTO.toString();
    }

    public List<ContainerDTO> getContainers(String username) {
        List<ContainerEntity> containerEntities = containerRepository.findByManagerId(username);
        List<ContainerDTO> containerDTOS = new ArrayList<>();
        for (ContainerEntity containerEntity : containerEntities) {
            containerDTOS.add(ContainerDTO.toContainerDTO(containerEntity));
        }
        return containerDTOS;
    }

}
