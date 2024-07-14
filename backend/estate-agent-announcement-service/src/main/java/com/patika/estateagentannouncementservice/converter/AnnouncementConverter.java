package com.patika.estateagentannouncementservice.converter;
import com.patika.estateagentannouncementservice.dto.AnnouncementDTO;
import com.patika.estateagentannouncementservice.model.Announcement;
import org.springframework.stereotype.Component;

@Component
public class AnnouncementConverter {

    public AnnouncementDTO convertToDTO(Announcement announcement) {
        AnnouncementDTO dto = new AnnouncementDTO();
        dto.setId(announcement.getId());
        dto.setUserId(announcement.getUserId());
        dto.setTitle(announcement.getTitle());
        dto.setDescription(announcement.getDescription());
        dto.setStatus(announcement.getAnnouncementStatus());
        dto.setCreatedAt(announcement.getCreatedAt());
        dto.setUpdatedAt(announcement.getUpdatedAt());
        dto.setValidUntil(announcement.getValidUntil());
        dto.setType(announcement.getType().name());
        return dto;
    }
}