package com.cosmos.container.repository;

import com.cosmos.container.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<MemberEntity, String> {
    boolean existsByMemberId(String id);
    boolean existsByMemberEmail(String email);

    Optional<MemberEntity> findByMemberId(String username);
}
