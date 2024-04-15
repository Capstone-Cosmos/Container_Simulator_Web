package com.cosmos.container.dto;

import com.cosmos.container.entity.ProductEntity;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ProductDTO {
    private long id;
    private String memberId;
    private String productName;
    private int quantity;
    private float height;
    private float weight;
    private String deadline;
    private String firstAddress;
    private String finalAddress;

    public static ProductDTO toProductDTO(ProductEntity productEntity) {
        ProductDTO productDTO = new ProductDTO();
        productDTO.setMemberId(productEntity.getMemberId());
        productDTO.setProductName(productEntity.getProductName());
        productDTO.setQuantity(productEntity.getQuantity());
        productDTO.setHeight(productEntity.getHeight());
        productDTO.setWeight(productEntity.getWeight());
        productDTO.setDeadline(productEntity.getDeadline());
        productDTO.setFirstAddress(productEntity.getFirstAddress());
        productDTO.setFinalAddress(productEntity.getFinalAddress());

        return productDTO;
    }
}
