package com.cosmos.container.entity;

import com.cosmos.container.constant.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "User_table")
public class UserInfoEntity extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Role role;

    public static UserInfoEntity toUserInfoEntity(String userName, String password, String email, Role role) {
        UserInfoEntity userInfoEntity = new UserInfoEntity();
        userInfoEntity.username = userName;
        userInfoEntity.password = password;
        userInfoEntity.email = email;
        userInfoEntity.role = role;
        return userInfoEntity;
    }
}
