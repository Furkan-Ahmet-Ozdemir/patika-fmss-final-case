package com.patika.estateagentannouncementservice.client.user.response;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserResponse {
    private Long id;
    private String username;
    private String email;
    private Date createdAt;
    private Date updatedAt;

    private int totalAnnouncementCount;
    private LocalDate expiryDate;

    private List<Package> packages;
}
