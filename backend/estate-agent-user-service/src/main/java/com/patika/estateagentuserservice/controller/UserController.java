package com.patika.estateagentuserservice.controller;

import com.patika.estateagentuserservice.dto.PackageDTO;
import com.patika.estateagentuserservice.dto.UserDTO;
import com.patika.estateagentuserservice.model.Package;
import com.patika.estateagentuserservice.service.PackageService;
import com.patika.estateagentuserservice.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    private final PackageService packageService;
    @PostMapping
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return userService.createUser(userDTO);
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/username/{username}")
    public UserDTO getUserByUsername(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        return userService.updateUser(id, userDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @GetMapping("/packages")
    public List<PackageDTO> getAllPackages() {
        return packageService.getAllPackages();
    }

    @GetMapping("/packages/{userId}")
    public List<Package> getUsersPackages(@PathVariable Long userId) {
        return packageService.getUserPackages(userId);
    }

    @PostMapping("/packages/{userId}")
    public List<Package> getUsersPackages(@PathVariable Long userId,@RequestBody PackageDTO packageDTO) {
        return packageService.getUserPackages(userId);
    }

}