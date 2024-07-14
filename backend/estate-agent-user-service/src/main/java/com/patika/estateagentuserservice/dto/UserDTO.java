package com.patika.estateagentuserservice.dto;
import com.patika.estateagentuserservice.model.Package;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Setter
public class UserDTO {
    private Long id;
    private String username;
    private String email;
    private Date createdAt;
    private Date updatedAt;

    private int totalAnnouncementCount;
    private LocalDate expiryDate;

    private List<Package> packages;
}
