package com.patika.estateagentuserservice.model;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "packages")
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private double price;
    private int count;
    private LocalDate startDate;
    private LocalDate expiryDate;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}