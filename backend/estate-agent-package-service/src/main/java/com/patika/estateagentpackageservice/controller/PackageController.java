package com.patika.estateagentpackageservice.controller;
import com.patika.estateagentpackageservice.dto.PackageDTO;
import com.patika.estateagentpackageservice.service.PackageService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/packages")
@RequiredArgsConstructor
public class PackageController {

    private final PackageService packageService;

    @GetMapping("/user/{userId}")
    public List<PackageDTO> getUserPackages(@PathVariable Long userId) {
        return packageService.getUserPackages(userId);
    }
}