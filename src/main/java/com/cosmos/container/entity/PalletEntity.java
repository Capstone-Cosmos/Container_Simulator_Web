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

    public void initPallet(Long id, String palletName, Long containerId, PalletType palletType, float height, float weight){
        this.id = id;
        this.palletName = palletName;
        this.containerId = containerId;
        this.palletType = palletType;
        this.height = height;
        this.weight = weight;
    }

    public void savePalletLocation(float x, float y, float z){
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
