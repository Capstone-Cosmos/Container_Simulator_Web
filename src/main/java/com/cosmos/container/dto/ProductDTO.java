package com.cosmos.container.dto;

import com.cosmos.container.entity.ProductEntity;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductDTO {
    private long id;
    private String productName;
    private int quantity;
    private float height;
    private float weight;
    private LocalDateTime deadline;
    private String firstAddress;
    private String finalAddress;
    private LocalDateTime orderTime;
    private String deliveryStatus;
    private String approvalStatus;

    public static ProductDTO toProductDTO(ProductEntity productEntity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(productEntity.getId());
        productDTO.setProductName(productEntity.getProductName());
        productDTO.setQuantity(productEntity.getQuantity());
        productDTO.setHeight(productEntity.getHeight());
        productDTO.setWeight(productEntity.getWeight());
        productDTO.setDeadline(productEntity.getDeadline());
        productDTO.setFirstAddress(productEntity.getFirstAddress());
        productDTO.setFinalAddress(productEntity.getFinalAddress());
        productDTO.setOrderTime(productEntity.getCreateTime());
        productDTO.setDeliveryStatus(productEntity.getDeliveryStatus());
        productDTO.setApprovalStatus(productEntity.getApprovalStatus());
        return productDTO;
    }
}
