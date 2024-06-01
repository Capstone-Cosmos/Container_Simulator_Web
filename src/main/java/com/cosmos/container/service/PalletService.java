package com.cosmos.container.service;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.constant.ContainerType;
import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.PalletDTO;
import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ContainerEntity;
import com.cosmos.container.entity.PalletEntity;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ContainerRepository;
import com.cosmos.container.repository.PalletRepository;
import com.cosmos.container.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PalletService {
    private final PalletRepository palletRepository;
    private final ProductRepository productRepository;
    private final ContainerRepository containerRepository;

    public List<PalletDTO> getPallets(Long containerId) {
        List<PalletEntity> palletEntities = palletRepository.findByContainerId(containerId);
        List<PalletDTO> palletDTOS = new ArrayList<>();
        for(PalletEntity palletEntity : palletEntities) {
            palletDTOS.add(PalletDTO.toPalletDTO(palletEntity));
        }
        return palletDTOS;
    }

    public boolean addPallet(Long productId, Long containerId, PalletType palletType) {
        PalletEntity palletEntity = new PalletEntity();
        ProductEntity productEntity = productRepository.findById(productId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        ContainerEntity containerEntity = containerRepository.findById(containerId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        float weight = getWeight(palletType, productEntity);
        if(!validatePallet(containerEntity, weight))
            return false;
        float height = productEntity.getHeight() + 0.15f;
        palletEntity.initPallet(productId, productEntity.getProductName(), containerId, palletType, height, weight);
        productEntity.setAssigned(true);
        containerEntity.addWeight(weight);
        palletRepository.save(palletEntity);
        productRepository.save(productEntity);
        containerRepository.save(containerEntity);
        return true;
    }

    public void cancelPallet(Long palletId) {
        PalletEntity palletEntity = palletRepository.findById(palletId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        ProductEntity productEntity = productRepository.findById(palletEntity.getId())
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        productEntity.setAssigned(false);
        ContainerEntity containerEntity = containerRepository.findById(palletEntity.getContainerId())
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 컨테이너입니다"));
        containerEntity.loseWeight(palletEntity.getWeight());
        productRepository.save(productEntity);
        containerRepository.save(containerEntity);
        palletRepository.deleteById(palletId);
    }

    public void saveLocation(PalletDTO palletDTO) {
        PalletEntity palletEntity = palletRepository.findById(palletDTO.getId())
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        palletEntity.savePalletLocation(palletDTO.getX(), palletDTO.getY(), palletDTO.getZ());
        palletRepository.save(palletEntity);
    }

    public List<ProductDTO> getValidProducts(Long containerId, String username) {
        ContainerEntity containerEntity = containerRepository.findById(containerId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        List<ProductEntity> productEntities = productRepository.findByApprovalStatusAndManagerIdAndAssigned(ApprovalStatus.STATUS_ACCEPT, username, false);
        return getValidProduct(containerEntity, productEntities);
    }

    private float getWeight(PalletType palletType, ProductEntity productEntity) {
        float weight;
        if(palletType == PalletType.PALLET_TYPE_11A){
            weight = productEntity.getWeight() + 19.5f;
        }
        else if(palletType == PalletType.PALLET_TYPE_12A){
            weight = productEntity.getWeight() + 19.0f;
        }
        else if(palletType == PalletType.PALLET_TYPE_11B){
            weight = productEntity.getWeight() + 26.2f;
        }
        else if(palletType == PalletType.PALLET_TYPE_13B){
            weight = productEntity.getWeight() + 25.0f;
        }
        else{
            weight = productEntity.getWeight() + 27.5f;
        }
        return weight;
    }

    private boolean validatePallet(ContainerEntity containerEntity, float weight) {
        if(containerEntity.getContainerType() == ContainerType.CONTAINER_TYPE_20FT_DRY){
            return (containerEntity.getWeight() + weight <= 21700);
        } else if(containerEntity.getContainerType() == ContainerType.CONTAINER_TYPE_40FT_DRY){
            return (containerEntity.getWeight() + weight <= 26740);
        } else{
            return (containerEntity.getWeight() + weight <= 26580);
        }
    }

    private List<ProductDTO> getValidProduct(ContainerEntity containerEntity, List<ProductEntity> productEntities){
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            if(validatePallet(containerEntity, productEntity.getWeight() + 27.5f))
                productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }
}
