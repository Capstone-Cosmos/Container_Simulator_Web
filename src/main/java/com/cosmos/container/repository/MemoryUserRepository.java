package com.cosmos.container.repository;

import com.cosmos.container.dto.UserDTO;

import java.util.*;

public class MemoryUserRepository implements UserRepository{
    private static Map<String, UserDTO> store = new HashMap<>();
    private static String[] sample = new String[]{"Hello", "World", "foo", "bar"};
    private static int cur = 0;
    @Override
    public UserDTO save(UserDTO userDTO) {
        userDTO.setUserId(sample[cur++]);
        store.put(userDTO.getUserId(), userDTO);
        return userDTO;
    }

    @Override
    public Optional<UserDTO> findById(String userId) {
        return Optional.ofNullable(store.get(userId));
    }

    @Override
    public List<UserDTO> findAll() {
        return new ArrayList<>(store.values());
    }
}
