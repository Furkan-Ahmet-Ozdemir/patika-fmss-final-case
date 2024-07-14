package com.patika.estateagentannouncementservice.client.user.service;


import com.patika.estateagentannouncementservice.client.user.UserClient;
import com.patika.estateagentannouncementservice.client.user.response.UserResponse;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;


@RequiredArgsConstructor
@Service
@Slf4j
public class UserService {

    private final UserClient userClient;

    public UserResponse getUserByName(String userName) {

        UserResponse response = userClient.getUserByUsername(userName);

        if (response != null) {
            log.error("Publisher bulunamadı!");
        }

        return response;
    }

    public Optional<UserResponse> getById(Long userId) {
        return Optional.ofNullable(userClient.getUserById(userId));
    }
}
