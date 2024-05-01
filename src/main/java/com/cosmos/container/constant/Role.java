package com.cosmos.container.constant;

public enum Role {
    ROLE_MEMBER("ROLE_MEMBER"),
    ROLE_MANAGER("ROLE_MANAGER");

    private final String role;

    Role(String role){
        this.role = role;
    }

    public String value(){
        return role;
    }
}
