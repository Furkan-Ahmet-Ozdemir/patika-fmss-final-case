package com.patika.estateagentannouncementservice.dto.request;
import lombok.Data;

@Data
public class UpdateAnnouncementRequest {
    private String title;
    private String description;
    private String status;
}