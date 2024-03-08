package com.cosmos.container.repository;

import com.cosmos.container.dto.UserDTO;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    UserDTO save(UserDTO userDTO);
    Optional<UserDTO> findById(String userId);
    List<UserDTO> findAll();

}
