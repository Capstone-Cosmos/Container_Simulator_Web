package com.cosmos.container.entity;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
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

    @Column
    private String managerId;

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

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus = ApprovalStatus.STATUS_WAITING;

    @Column(nullable = false)
    private boolean assigned = false;

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
