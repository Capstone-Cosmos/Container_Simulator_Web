package com.cosmos.container.dto;

import com.cosmos.container.constant.PalletType;
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
    private LocalDateTime releaseDate;
    private String firstAddress;
    private String finalAddress;
    private String deliveryStatus;
    private String approvalStatus;
    private LocalDateTime orderTime;
    private PalletType palletType;

    public static ProductDTO toProductDTO(ProductEntity productEntity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setId(productEntity.getId());
        productDTO.setProductName(productEntity.getProductName());
        productDTO.setQuantity(productEntity.getQuantity());
        productDTO.setHeight(productEntity.getHeight());
        productDTO.setWeight(productEntity.getWeight());
        productDTO.setReleaseDate(productEntity.getReleaseDate());
        productDTO.setFirstAddress(productEntity.getFirstAddress());
        productDTO.setFinalAddress(productEntity.getFinalAddress());
        productDTO.setDeliveryStatus(productEntity.getDeliveryStatus().getStatus());
        productDTO.setApprovalStatus(productEntity.getApprovalStatus().getStatus());
        productDTO.setOrderTime(productEntity.getCreateTime());
        return productDTO;
    }
}
