package com.patika.estateagentuserservice.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;
    private String email;
    private Date createdAt;
    private Date updatedAt;

    private int totalAnnouncementCount = 0;
    private LocalDate expiryDate;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Package> packages;
}

