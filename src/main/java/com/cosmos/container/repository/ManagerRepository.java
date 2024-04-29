package com.cosmos.container.repository;

import com.cosmos.container.entity.ManagerEntity;
import com.cosmos.container.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagerRepository extends JpaRepository<ManagerEntity, String> {
    boolean existsByManagerId(String id);
    boolean existsByManagerEmail(String email);
    Optional<ManagerEntity> findByManagerId(String username);
}
