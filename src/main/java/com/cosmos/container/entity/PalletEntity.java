package com.cosmos.container.entity;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.PalletDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "pallet_table")
public class PalletEntity extends BaseEntity {

    @Id
    private long id;

    @Column(nullable = false)
    private String palletName;

    @Column(nullable = false)
    private long containerId;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private PalletType palletType;

    @Column(nullable = false)
    private float height;

    @Column(nullable = false)
    private float weight;

    @Column
    private float x;

    @Column
    private float y;

    @Column
    private float z;

    public static PalletEntity toPalletEntity(PalletDTO palletDTO){
        PalletEntity palletEntity = new PalletEntity();
        palletEntity.setId(palletDTO.getId());
        palletEntity.setContainerId(palletDTO.getContainerId());
        palletEntity.setPalletType(palletDTO.getPalletType());
        palletEntity.setHeight(palletDTO.getHeight());
        palletEntity.setWeight(palletDTO.getWeight());
        palletEntity.setX(palletDTO.getX());
        palletEntity.setY(palletDTO.getY());
        palletEntity.setZ(palletDTO.getZ());
        return palletEntity;
    }
}
