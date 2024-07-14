package com.patika.estateagentannouncementservice.client.user;

import com.patika.estateagentannouncementservice.client.user.response.UserResponse;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(value = "user-service", url = "localhost:8085/api/users")
public interface UserClient {

    @GetMapping("/username/{username}")
    UserResponse getUserByUsername(@PathVariable String username);

    @GetMapping("/{id}")
    UserResponse getUserById(@PathVariable Long id);

}
