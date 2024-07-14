package com.patika.estateagentannouncementservice.model;
import com.patika.estateagentannouncementservice.model.enums.AnnouncementStatus;
import com.patika.estateagentannouncementservice.model.enums.PropertyType;
import com.patika.estateagentannouncementservice.model.enums.AnnouncementType;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Announcement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long userId;

    private String title;
    private String description;

    @Enumerated(EnumType.STRING)
    private AnnouncementStatus announcementStatus;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime validUntil;

    @Enumerated(EnumType.STRING)
    private AnnouncementType type;

    @Enumerated(EnumType.STRING)
    private PropertyType propertyType;
}