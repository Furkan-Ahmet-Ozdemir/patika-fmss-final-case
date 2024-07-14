package com.patika.estateagentpackageservice.dto;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class PackageDTO {
    private Long id;
    private int count;
    private Date expiryDate;

    // Getters and Setters
}