package com.cosmos.container.repository;

import com.cosmos.container.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByid(Long id);
    Optional<ProductEntity> findByidAndManagerId(Long id, String username);
    List<ProductEntity> findByMemberId(String memberId);
    List<ProductEntity> findByApprovalStatus(String approvalStatus);
    List<ProductEntity> findByApprovalStatusAndManagerId(String approvalStatus, String managerId);
    void deleteByMemberIdAndId(String memberId, Long id);
}
