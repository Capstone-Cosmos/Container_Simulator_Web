package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum PalletType {
    PALLET_TYPE_11A("11A형"),
    PALLET_TYPE_12A("12A형"),
    PALLET_TYPE_11B("11B형"),
    PALLET_TYPE_13B("13B형"),
    PALLET_TYPE_15A("15A형");

    private final String type;

    PalletType(String type) {
        this.type = type;
    }
}
