package com.cosmos.container.repository;

import com.cosmos.container.dto.UserDTO;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

class MemoryUserRepositoryTest {
    UserRepository repository = new MemoryUserRepository();

    @Test
    public void save(){
        UserDTO userdto = new UserDTO();
        userdto.setUserPassword("1234");
        userdto.setCompanyAddress("대구");
        userdto.setCompanyName("samsung");
        userdto.setPresidentName("전상언");

        repository.save(userdto);
        UserDTO result = repository.findById(userdto.getUserId()).get();
        Assertions.assertThat(userdto).isEqualTo(result);
    }
}
