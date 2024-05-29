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
    private String palletName;
    private String palletType;
    private float height;
    private float weight;
    private float x;
    private float y;
    private float z;

    public static PalletDTO toPalletDTO(PalletEntity palletEntity){
        PalletDTO palletDTO = new PalletDTO();
        palletDTO.setId(palletEntity.getId());
        palletDTO.setPalletName(palletEntity.getPalletName());
        palletDTO.setPalletType(palletEntity.getPalletType().getType());
        palletDTO.setHeight(palletEntity.getHeight());
        palletDTO.setWeight(palletEntity.getWeight());
        palletDTO.setX(palletEntity.getX());
        palletDTO.setY(palletEntity.getY());
        palletDTO.setZ(palletEntity.getZ());
        return palletDTO;
    }
}
