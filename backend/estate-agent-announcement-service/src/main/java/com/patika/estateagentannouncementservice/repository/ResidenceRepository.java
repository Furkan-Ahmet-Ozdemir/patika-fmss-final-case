package com.example.patikafmssfinalcase.repository;
import com.example.patikafmssfinalcase.model.Residence;
import org.springframework.stereotype.Repository;

@Repository
public interface ResidenceRepository extends JpaRepository<Residence, Long> {
}