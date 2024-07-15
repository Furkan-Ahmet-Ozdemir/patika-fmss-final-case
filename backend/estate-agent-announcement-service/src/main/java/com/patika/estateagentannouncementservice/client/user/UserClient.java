package com.patika.estateagentannouncementservice.client.user;

import com.patika.estateagentannouncementservice.client.user.dto.UserDTO;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@FeignClient(value = "user-service", url = "localhost:8085/api/users")
public interface UserClient {

    @GetMapping("/username/{username}")
    UserDTO getUserByUsername(@PathVariable String username);

    @GetMapping("/{id}")
    UserDTO getUserById(@PathVariable Long id);

    @PutMapping("/{id}")
    UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO);
}
