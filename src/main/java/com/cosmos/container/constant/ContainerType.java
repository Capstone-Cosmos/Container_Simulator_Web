package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum ContainerType {
    CONTAINER_TYPE_20FT_DRY("20FT_DRY"),
    CONTAINER_TYPE_40FT_DRY("40FT_DRY"),
    CONTAINER_TYPE_40FT_HQ("40FT_HQ");

    private final String type;

    ContainerType(String type) {
        this.type = type;
    }
}
