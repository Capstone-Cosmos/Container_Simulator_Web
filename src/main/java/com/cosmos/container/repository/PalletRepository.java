package com.cosmos.container.repository;

import com.cosmos.container.entity.PalletEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PalletRepository extends JpaRepository<PalletEntity, Long> {
    List<PalletEntity> findByContainerId(Long containerId);
}
