package com.cosmos.container.dto;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.entity.PalletEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PalletDTO {
    private long id;
    private long productId;
    private long containerId;
    private PalletType palletType;
    private float height;
    private float weight;
    private float x;
    private float y;
    private float z;

    public static PalletDTO toPalletDTO(PalletEntity palletEntity){
        PalletDTO palletDTO = new PalletDTO();
        palletDTO.setId(palletEntity.getId());
        palletDTO.setProductId(palletEntity.getProductId());
        palletDTO.setContainerId(palletEntity.getContainerId());
        palletDTO.setPalletType(palletEntity.getPalletType());
        palletDTO.setHeight(palletEntity.getHeight());
        palletDTO.setWeight(palletEntity.getWeight());
        palletDTO.setX(palletEntity.getX());
        palletDTO.setY(palletEntity.getY());
        palletDTO.setZ(palletEntity.getZ());
        return palletDTO;
    }
}
