package com.cosmos.container.repository;

import com.cosmos.container.constant.ApprovalStatus;
import com.cosmos.container.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ProductRepository extends JpaRepository<ProductEntity, Long> {
    List<ProductEntity> findByMemberId(String memberId);
    List<ProductEntity> findByApprovalStatus(ApprovalStatus approvalStatus);
    List<ProductEntity> findByApprovalStatusAndManagerIdAndAssigned(ApprovalStatus approvalStatus, String managerId, boolean assigned);
    void deleteByMemberIdAndId(String memberId, Long id);
}
