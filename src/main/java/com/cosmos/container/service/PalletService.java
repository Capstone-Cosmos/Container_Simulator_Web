package com.cosmos.container.service;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.constant.ContainerType;
import com.cosmos.container.constant.DeliveryStatus;
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

import java.time.LocalDateTime;
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
        float weight = productEntity.getWeight() + palletType.getWeight();
        if(!validatePallet(containerEntity, weight))
            return false;
        float height = productEntity.getHeight() + 0.15f;
        palletEntity.initPallet(productId, productEntity.getProductName(), containerId, palletType, height, weight);
        productEntity.setDeliveryStatus(DeliveryStatus.STATUS_READY);
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
        List<ProductDTO> productDTOS = getValidProduct(containerEntity, productEntities);
        LocalDateTime baseDate = containerEntity.getDeadline();
        productDTOS.removeIf(productDTO -> productDTO.getReleaseDate().isAfter(baseDate));
        return productDTOS;
    }

    private boolean validatePallet(ContainerEntity containerEntity, float weight) {
        return containerEntity.getWeight() + weight <= containerEntity.getContainerType().getMaxWeight();
    }

    private List<ProductDTO> getValidProduct(ContainerEntity containerEntity, List<ProductEntity> productEntities){
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            if(validatePallet(containerEntity, productEntity.getWeight() + 27.5f))
                productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }

    public void shipPallets(Long containerId) {
        List<PalletEntity> palletEntities = palletRepository.findByContainerId(containerId);
        ContainerEntity containerEntity = containerRepository.findById(containerId)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 컨테이너입니다"));
        double base_left = -1.2, base_right = 1.2;
        double base_1 = containerEntity.getContainerType().getBaseZ();
        double base_2 = containerEntity.getContainerType().getBaseZ();
        for(int i = 0; i < palletEntities.size(); i++){
            PalletEntity palletEntity = palletEntities.get(i);
            palletEntity.setY((float)(palletEntity.getHeight()/2 - 0.5));
            if(i%2 == 0){
                palletEntity.setX((float)(base_left + palletEntity.getPalletType().getLength()/2));
                palletEntity.setZ((float)(base_1 + palletEntity.getPalletType().getWidth()/2));
                base_1 += palletEntity.getPalletType().getWidth();
            } else{
                palletEntity.setX((float)(base_right - palletEntity.getPalletType().getLength()/2));
                palletEntity.setZ((float)(base_2 + palletEntity.getPalletType().getWidth()/2));
                base_2 += palletEntity.getPalletType().getWidth();
            }
            palletRepository.save(palletEntity);
        }
    }
}
