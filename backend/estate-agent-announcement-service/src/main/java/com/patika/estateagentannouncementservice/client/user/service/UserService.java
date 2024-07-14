package com.patika.estateagentannouncementservice.client.user.service;


import com.patika.estateagentannouncementservice.client.user.UserClient;
import com.patika.estateagentannouncementservice.client.user.response.UserResponse;

import com.patika.estateagentannouncementservice.rest.GenericResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Optional;


@RequiredArgsConstructor
@Service
@Slf4j
public class UserService {

    private final UserClient userClient;

    public UserResponse getPublisherByName(String publisherName) {

        GenericResponse<UserResponse> response = userClient.getByName(publisherName);

        if (response != null) {
            log.error("Publisher bulunamadı!");
        }

        return response.getData();
    }

    public Optional<UserResponse> getById(Long publisherId) {
        return userClient.findById(publisherId);
    }
}
