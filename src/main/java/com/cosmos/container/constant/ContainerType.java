package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum ContainerType {
    TYPE_20FT_DRY("1TEU"),
    TYPE_40FT_DRY("1FEU"),
    TYPE_40FT_HQ("1FEU_HQ");

    private final String type;

    ContainerType(String type) {
        this.type = type;
    }
}
