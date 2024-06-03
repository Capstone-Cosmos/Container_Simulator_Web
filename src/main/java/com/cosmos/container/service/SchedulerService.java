package com.cosmos.container.service;

import com.cosmos.container.constant.DeliveryStatus;
import com.cosmos.container.entity.ContainerEntity;
import com.cosmos.container.entity.PalletEntity;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ContainerRepository;
import com.cosmos.container.repository.PalletRepository;
import com.cosmos.container.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class SchedulerService {
    private final PalletRepository palletRepository;
    private final ProductRepository productRepository;
    private final ContainerRepository containerRepository;

    @Scheduled(fixedDelay = 60000)
    public void run(){
        List<ContainerEntity> containerEntities = containerRepository.findAllByDeadlineBefore(LocalDateTime.now());
        for (ContainerEntity containerEntity : containerEntities) {
            List<PalletEntity> palletEntities = palletRepository.findByContainerId(containerEntity.getId());
            for (PalletEntity palletEntity : palletEntities) {
                ProductEntity productEntity = productRepository.findById(palletEntity.getId())
                        .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
                productEntity.setDeliveryStatus(DeliveryStatus.STATUS_TRANSIT);
                productRepository.save(productEntity);
            }
        }
    }
}
