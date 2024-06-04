package com.cosmos.container.constant;

import com.cosmos.container.entity.ContainerEntity;
import lombok.Getter;

@Getter
public enum ContainerType {
    CONTAINER_TYPE_20FT_DRY("20FT_DRY", -8.6f, 21700),
    CONTAINER_TYPE_40FT_DRY("40FT_DRY", -15.2f, 26740),
    CONTAINER_TYPE_40FT_HQ("40FT_HQ", -15.2f, 26580);

    private final String type;
    private final float baseZ;
    private final float MaxWeight;

    ContainerType(String type, float baseZ, float MaxWeight) {
        this.type = type;
        this.baseZ = baseZ;
        this.MaxWeight = MaxWeight;
    }
}