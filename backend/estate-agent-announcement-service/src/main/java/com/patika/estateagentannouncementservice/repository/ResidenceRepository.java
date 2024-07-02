package com.patika.estateagentannouncementservice.repository;

import com.patika.estateagentannouncementservice.model.Residence;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {
}