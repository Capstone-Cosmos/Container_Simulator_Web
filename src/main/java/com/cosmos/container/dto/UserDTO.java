package com.cosmos.container.dto;

import lombok.*;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class UserDTO {
    private String userId;
    private String userPassword;
    private String companyAddress;
    private String companyName;
    private String presidentName;
}
