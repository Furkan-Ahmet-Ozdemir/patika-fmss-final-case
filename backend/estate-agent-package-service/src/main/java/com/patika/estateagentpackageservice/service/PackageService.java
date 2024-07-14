package com.patika.estateagentpackageservice.service;
import com.patika.estateagentpackageservice.converter.PackageConverter;
import com.patika.estateagentpackageservice.dto.PackageDTO;
import com.patika.estateagentpackageservice.model.Package;
import com.patika.estateagentpackageservice.repository.PackageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PackageService {

    private PackageRepository packageRepository;

    @Autowired
    private PackageConverter packageConverter;

    public List<PackageDTO> getUserPackages(Long userId) {
        List<Package> packages = packageRepository.findByUserId(userId);
        return packageConverter.toDTOList(packages);
    }
}