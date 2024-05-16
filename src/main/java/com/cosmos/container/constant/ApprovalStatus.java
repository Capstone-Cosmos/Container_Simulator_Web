package com.cosmos.container.constant;

import lombok.Getter;

@Getter
public enum ApprovalStatus {
    STATUS_WAITING("승인대기"),
    STATUS_ACCEPT("승인"),
    STATUS_REJECT("반려");

    private final String status;

    ApprovalStatus(String status) {
        this.status = status;
    }
}
