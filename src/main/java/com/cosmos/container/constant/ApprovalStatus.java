package com.cosmos.container.constant;

public enum ApprovalStatus {
    STATUS_WAITING("승인대기"),
    STATUS_ACCEPT("승인"),
    STATUS_REJECT("반려");

    private final String status;

    ApprovalStatus(String status) {
        this.status = status;
    }

    public String getStatus() {
        return status;
    }
}
