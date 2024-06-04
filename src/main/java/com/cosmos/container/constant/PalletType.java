package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum PalletType {
    PALLET_TYPE_11A("11A형", 1.1f,1.1f, 19.5f),
    PALLET_TYPE_12A("12A형", 1.2f,1.0f, 19.0f),
    PALLET_TYPE_11B("11B형", 1.1f, 1.1f, 26.2f),
    PALLET_TYPE_13B("13B형", 1.3f,  1.1f, 25.0f),
    PALLET_TYPE_15A("15A형", 1.46f, 1.13f, 27.5f);

    private final String type;
    private final float width;
    private final float length;
    private final float weight;

    PalletType(String type, float width, float length, float weight) {
        this.type = type;
        this.width = width;
        this.length = length;
        this.weight = weight;
    }
}