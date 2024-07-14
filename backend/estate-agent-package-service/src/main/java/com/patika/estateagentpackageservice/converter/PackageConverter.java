package com.patika.estateagentpackageservice.converter;
import com.patika.estateagentpackageservice.dto.PackageDTO;
import com.patika.estateagentpackageservice.model.Package;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class PackageConverter {
    public PackageDTO toDTO(Package pkg) {
        PackageDTO packageDTO = new PackageDTO();
        packageDTO.setId(pkg.getId());
        packageDTO.setCount(pkg.getCount());
        packageDTO.setExpiryDate(pkg.getExpiryDate());
        return packageDTO;
    }

    public List<PackageDTO> toDTOList(List<Package> packages) {
        return packages.stream().map(this::toDTO).collect(Collectors.toList());
    }
}