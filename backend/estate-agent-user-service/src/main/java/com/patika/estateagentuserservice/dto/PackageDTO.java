package com.patika.estateagentuserservice.dto;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
public class PackageDTO {
    private Long id;
    private String name;
    private String description;
    private double price;
    private int count;
    private LocalDate expiryDate;
}