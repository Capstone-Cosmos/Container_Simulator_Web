package com.cosmos.container.repository;

import com.cosmos.container.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByid(Long id);

    void deleteByMemberIdAndId(String memberId, Long id);
}
