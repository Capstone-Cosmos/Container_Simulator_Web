package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum DeliveryStatus {
    STATUS_NULL("-"),
    STATUS_READY("배송대기"),
    STATUS_TRANSIT("배송중"),
    STATUS_ARRIVAL("배송완료");

    private final String status;

    DeliveryStatus(String status) {
        this.status = status;
    }
}
