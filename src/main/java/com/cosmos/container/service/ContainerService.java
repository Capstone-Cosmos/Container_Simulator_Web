package com.cosmos.container.service;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.ContainerDTO;
import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ContainerEntity;
import com.cosmos.container.entity.PalletEntity;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ContainerRepository;
import com.cosmos.container.repository.PalletRepository;
import com.cosmos.container.repository.ProductRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContainerService {
    private final ContainerRepository containerRepository;
    private final ProductRepository productRepository;
    private final PalletRepository palletRepository;

    public List<ContainerDTO> getContainers(String username) {
        List<ContainerEntity> containerEntities = containerRepository.findByManagerId(username);
        List<ContainerDTO> containerDTOS = new ArrayList<>();
        for (ContainerEntity containerEntity : containerEntities) {
            containerDTOS.add(ContainerDTO.toContainerDTO(containerEntity));
        }
        return containerDTOS;
    }

    public void saveContainer(ContainerDTO containerDTO, String username) {
        ContainerEntity containerEntity = ContainerEntity.toContainerEntity(containerDTO, username);
        containerRepository.save(containerEntity);
    }

    @Transactional
    public void deleteContainer(Long id, String username) {
        List<PalletEntity> palletEntities = palletRepository.findByContainerId(id);
        for (PalletEntity palletEntity : palletEntities) {
            ProductEntity productEntity = productRepository.findById(palletEntity.getId())
                    .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
            productEntity.setAssigned(false);
            productRepository.save(productEntity);
            palletRepository.delete(palletEntity);
        }
        containerRepository.deleteByManagerIdAndId(username, id);
    }
}
