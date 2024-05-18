package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum ContainerType {
    CONTAINER_TYPE_20FT_DRY("1TEU"),
    CONTAINER_TYPE_40FT_DRY("1FEU"),
    CONTAINER_TYPE_40FT_HQ("1FEU_HQ");

    private final String type;

    ContainerType(String type) {
        this.type = type;
    }
}
