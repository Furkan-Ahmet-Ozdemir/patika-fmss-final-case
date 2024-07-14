package com.patika.estateagentannouncementservice.dto.request;
import lombok.Data;

@Data
public class CreateAnnouncementRequest {
    private Long userId;
    private String title;
    private String description;
    private String type;
    private String propertyType;
}