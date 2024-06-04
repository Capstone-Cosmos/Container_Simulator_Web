package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum PalletType {
    PALLET_TYPE_11A("11A형", (float) 1.1, (float) 1.1),
    PALLET_TYPE_12A("12A형", (float) 1.2, (float) 1.0),
    PALLET_TYPE_11B("11B형", (float) 1.1, (float) 1.1),
    PALLET_TYPE_13B("13B형", (float) 1.3, (float) 1.1),
    PALLET_TYPE_15A("15A형", (float) 1.46, (float) 1.13);

    private final String type;
    private final float width;
    private final float length;

    PalletType(String type, float width, float length) {
        this.type = type;
        this.width = width;
        this.length = length;
    }
}
