package com.patika.estateagentuserservice.repository;
import com.patika.estateagentuserservice.model.Package;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PackageRepository extends JpaRepository<Package, Long> {
    List<Package> getUserPackages(Long id);
}