package com.patika.estateagentannouncementservice.client.user.service;


import com.patika.estateagentannouncementservice.client.user.UserClient;
import com.patika.estateagentannouncementservice.client.user.dto.UserDTO;
import com.patika.estateagentannouncementservice.client.user.model.User;
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

    public UserDTO getUserByName(String userName) {

        UserDTO response = userClient.getUserByUsername(userName);

        if (response != null) {
            log.error("Publisher bulunamadı!");
        }

        return response;
    }

    public UserDTO getById(Long userId) {
        return userClient.getUserById(userId);
    }

    public UserDTO updateUser(Long id, UserDTO userDTO) {
        return userClient.updateUser(id,userDTO);
    }
}
