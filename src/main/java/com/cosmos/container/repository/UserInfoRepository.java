package com.cosmos.container.repository;

import com.cosmos.container.entity.UserInfoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfoEntity, Long> {
    Optional<UserInfoEntity> findByUsername(String username);

    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
