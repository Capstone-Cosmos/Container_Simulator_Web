package com.cosmos.container.entity;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.constant.DeliveryStatus;
import com.cosmos.container.dto.ProductDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
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
    private LocalDateTime releaseDate;

    @Column(nullable = false)
    private String firstAddress;

    @Column(nullable = false)
    private String finalAddress;

    @Column
    private DeliveryStatus deliveryStatus;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ApprovalStatus approvalStatus = ApprovalStatus.STATUS_WAITING;

    @Setter
    @Column(nullable = false)
    private boolean assigned;

    public void initProductEntity(String username, ProductDTO productDTO){
        this.memberId = username;
        this.productName = productDTO.getProductName();
        this.quantity = productDTO.getQuantity();
        this.height = productDTO.getHeight();
        this.weight = productDTO.getWeight();
        this.releaseDate = productDTO.getReleaseDate();
        this.firstAddress = productDTO.getFirstAddress();
        this.finalAddress = productDTO.getFinalAddress();
        this.deliveryStatus = DeliveryStatus.STATUS_NULL;
        this.assigned = false;
    }

    public void setApprovalStatus(ApprovalStatus approvalStatus, String managerId) {
        this.approvalStatus = approvalStatus;
        this.managerId = managerId;
    }

    public void setDeliveryStatus(DeliveryStatus deliveryStatus) {
        this.deliveryStatus = deliveryStatus;
    }
}
