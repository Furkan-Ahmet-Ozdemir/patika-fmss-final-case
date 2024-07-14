package com.patika.estateagentuserservice.service;

import com.patika.estateagentuserservice.converter.UserConverter;
import com.patika.estateagentuserservice.dto.UserDTO;
import com.patika.estateagentuserservice.model.User;
import com.patika.estateagentuserservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final UserConverter userConverter;
    private final PackageService packageServiceClient;


    public UserDTO createUser(UserDTO userDTO) {
        User user = userConverter.toEntity(userDTO);
        User savedUser = userRepository.save(user);
        return userConverter.toDTO(savedUser);
    }

    public UserDTO getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        UserDTO userDTO = userConverter.toDTO(user);
        userDTO.setPackages(packageServiceClient.getUserPackages(id));
        return userDTO;
    }

    public UserDTO getUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        UserDTO userDTO = userConverter.toDTO(user);
        userDTO.setPackages(packageServiceClient.getUserPackages(user.getId()));
        return userDTO;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return userConverter.toDTOList(users);
    }

    public UserDTO updateUser(Long id, UserDTO userDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        user.setEmail(userDTO.getEmail());
        user.setUpdatedAt(new java.util.Date());
        user.setTotalAnnouncementCount(userDTO.getTotalAnnouncementCount());
        user.setExpiryDate(userDTO.getExpiryDate());

        User updatedUser = userRepository.save(user);
        return userConverter.toDTO(updatedUser);
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

}
