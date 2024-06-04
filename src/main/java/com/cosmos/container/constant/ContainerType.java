package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum ContainerType {
    CONTAINER_TYPE_20FT_DRY("20FT_DRY", (float)-8.6),
    CONTAINER_TYPE_40FT_DRY("40FT_DRY", (float)-15.2),
    CONTAINER_TYPE_40FT_HQ("40FT_HQ", (float)-15.2);

    private final String type;
    private final float baseZ;

    ContainerType(String type, float baseZ) {
        this.type = type;
        this.baseZ = baseZ;
    }
}
