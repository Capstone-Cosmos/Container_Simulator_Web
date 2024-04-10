package com.cosmos.container.entity;

import com.cosmos.container.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "product_table")
public class ProductEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String productName;

    @Column
    private int quantity;

    @Column
    private float height;

    @Column
    private float weight;

    @Column(nullable = false)
    private String deadline;

    @Column(nullable = false)
    private String firstAddress;

    @Column(nullable = false)
    private String finalAddress;

    public static ProductEntity toProductEntity(ProductDTO productDTO){
        ProductEntity productEntity = new ProductEntity();
        productEntity.setProductName(productDTO.getProductName());
        productEntity.setQuantity(productDTO.getQuantity());
        productEntity.setHeight(productDTO.getHeight());
        productEntity.setWeight(productDTO.getWeight());
        productEntity.setDeadline(productDTO.getDeadline());
        productEntity.setFirstAddress(productDTO.getFirstAddress());
        productEntity.setFinalAddress(productDTO.getFinalAddress());

        return productEntity;
    }
}
