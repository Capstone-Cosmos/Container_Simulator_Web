package com.cosmos.container.entity;

import com.cosmos.container.constant.Role;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
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

    public void initUserInfoEntity(String userName, String password, String email, Role role) {
        this.username = userName;
        this.password = password;
        this.email = email;
        this.role = role;
    }

    public void initJWT(String username, Role role){
        this.username = username;
        this.role = role;
    }
}
