package com.patika.estateagentannouncementservice.dto;
import com.patika.estateagentannouncementservice.model.enums.AnnouncementStatus;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AnnouncementDTO {
    private Long id;
    private Long userId;
    private String title;
    private String description;
    private AnnouncementStatus status;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private LocalDateTime validUntil;
    private String type;
}