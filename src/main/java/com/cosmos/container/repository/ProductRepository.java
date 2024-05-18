package com.cosmos.container.repository;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    Optional<ProductEntity> findByid(Long id);
    Optional<ProductEntity> findByPalletId(Long palletId);
    List<ProductEntity> findByMemberId(String memberId);
    List<ProductEntity> findByApprovalStatus(ApprovalStatus approvalStatus);
    List<ProductEntity> findByApprovalStatusAndManagerIdAndPalletId(ApprovalStatus approvalStatus, String managerId, Long palletId);
    void deleteByMemberIdAndId(String memberId, Long id);
}
