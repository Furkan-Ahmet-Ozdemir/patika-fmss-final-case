package com.patika.estateagentuserservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Set;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    private Long id;
    private String name;
    private String surname;
    private String email;
    private String password;
    private Integer credit;
    private String phoneNumber;

    @OneToMany
    private Set<Address> addresses;
    private Boolean isActive;
    private AccountType accountType;

    public Customer(String name, String surname, String email, String password) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }
}
