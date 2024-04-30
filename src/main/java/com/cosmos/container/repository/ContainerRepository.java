package com.cosmos.container.repository;

import com.cosmos.container.entity.ContainerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContainerRepository extends JpaRepository<ContainerEntity, Long> {
    List<ContainerEntity> findByManagerId(String managerId);

    void deleteByManagerIdAndId(String managerId, Long id);
}
