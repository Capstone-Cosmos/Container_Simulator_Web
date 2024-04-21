package com.cosmos.container.entity;

import com.cosmos.container.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "product_table")
public class ProductEntity extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String memberId;

    @Column(nullable = false)
    private String productName;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private float height;

    @Column(nullable = false)
    private float weight;

    @Column(nullable = false)
    private LocalDateTime deadline;

    @Column(nullable = false)
    private String firstAddress;

    @Column(nullable = false)
    private String finalAddress;

    @Column
    private String deliveryStatus;

    @Column
    private String approvalStatus;

    public static ProductEntity toProductEntity(ProductDTO productDTO){
        ProductEntity productEntity = new ProductEntity();
        productEntity.setMemberId(productDTO.getMemberId());
        productEntity.setProductName(productDTO.getProductName());
        productEntity.setQuantity(productDTO.getQuantity());
        productEntity.setHeight(productDTO.getHeight());
        productEntity.setWeight(productDTO.getWeight());
        productEntity.setDeadline(productDTO.getDeadline());
        productEntity.setFirstAddress(productDTO.getFirstAddress());
        productEntity.setFinalAddress(productDTO.getFinalAddress());
        productEntity.setDeliveryStatus(productDTO.getDeliveryStatus());
        productEntity.setApprovalStatus(productDTO.getApprovalStatus());
        return productEntity;
    }
}
