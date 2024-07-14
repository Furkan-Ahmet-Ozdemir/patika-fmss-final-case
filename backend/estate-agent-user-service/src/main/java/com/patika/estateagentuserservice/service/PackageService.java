package com.patika.estateagentuserservice.service;

import com.patika.estateagentuserservice.converter.UserConverter;
import com.patika.estateagentuserservice.dto.PackageDTO;
import com.patika.estateagentuserservice.dto.UserDTO;
import com.patika.estateagentuserservice.model.Package;
import com.patika.estateagentuserservice.model.User;
import com.patika.estateagentuserservice.repository.PackageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PackageService {

    private final PackageRepository packageRepository;
    private final UserService userService;
    private final UserConverter userConverter;

    public List<Package> getUserPackages(Long userId) {
        return packageRepository.getUserPackages(userId);
    }

    public List<PackageDTO> getAllPackages() {
        return packageRepository.findAll().stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    private PackageDTO toDTO(Package pkg) {
        PackageDTO dto = new PackageDTO();
        dto.setId(pkg.getId());
        dto.setName(pkg.getName());
        dto.setDescription(pkg.getDescription());
        dto.setPrice(pkg.getPrice());
        dto.setCount(pkg.getCount());
        dto.setExpiryDate(pkg.getExpiryDate());
        return dto;
    }

    public void savePackage(Long userId){
        Package aPackage = new Package();
        aPackage.setCount(10);
        aPackage.setDescription("Bu paket 10 ilan yayınlama hakkı içerir. 30 gün boyunca geçerlidir.");
        aPackage.setName("10'lu Paket");
        aPackage.setPrice(500);
        aPackage.setExpiryDate(LocalDate.now().plusDays(30));


        packageRepository.save(aPackage);

        UserDTO user= (userService.getUserById(userId));
        user.setExpiryDate(aPackage.getExpiryDate());
        user.setTotalAnnouncementCount(user.getTotalAnnouncementCount() + aPackage.getCount() );
        user.setPackages((List<Package>) aPackage);
        userService.updateUser(userId,user);
    }

}