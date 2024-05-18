package com.cosmos.container.service;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.ContainerDTO;
import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ContainerEntity;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ContainerRepository;
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
        List<ProductEntity> productEntities = productRepository.findByContainerId(id);
        for (ProductEntity productEntity : productEntities) {
            productEntity.setContainerId(0);
            productEntity.setPalletType(null);
        }
        productRepository.saveAll(productEntities);
        containerRepository.deleteByManagerIdAndId(username, id);
    }

    public List<ProductDTO> getProducts(Long containerId) {
        List<ProductEntity> productEntities = productRepository.findByContainerId(containerId);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for (ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }

    public void assignProduct(long containerId, long productId, PalletType palletType, String username) {
        ProductEntity productEntity =  productRepository.findByidAndManagerId(productId, username)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 상품입니다"));
        productEntity.setContainerId(containerId);
        productEntity.setPalletType(palletType);
        ContainerEntity containerEntity = containerRepository.findById(containerId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 컨테이너입니다"));
        containerEntity.setWeight(containerEntity.getWeight() + productEntity.getWeight());
        productRepository.save(productEntity);
        containerRepository.save(containerEntity);
    }

    public void cancelProduct(long containerId, long productId, String username) {
        ProductEntity productEntity =  productRepository.findByidAndContainerIdAndManagerId(productId, containerId, username)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 상품입니다"));
        productEntity.setContainerId(0);
        productEntity.setPalletType(null);
        ContainerEntity containerEntity = containerRepository.findById(containerId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 컨테이너입니다"));
        containerEntity.setWeight(containerEntity.getWeight() - productEntity.getWeight());
        productRepository.save(productEntity);
        containerRepository.save(containerEntity);
    }
}
