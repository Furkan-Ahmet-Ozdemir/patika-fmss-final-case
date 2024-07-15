package com.patika.estateagentannouncementservice.service;

import com.patika.estateagentannouncementservice.client.user.dto.UserDTO;
import com.patika.estateagentannouncementservice.client.user.response.UserResponse;
import com.patika.estateagentannouncementservice.client.user.service.UserService;
import com.patika.estateagentannouncementservice.dto.AnnouncementDTO;
import com.patika.estateagentannouncementservice.dto.request.CreateAnnouncementRequest;
import com.patika.estateagentannouncementservice.dto.request.UpdateAnnouncementRequest;
import com.patika.estateagentannouncementservice.model.Announcement;
import com.patika.estateagentannouncementservice.model.enums.AnnouncementStatus;
import com.patika.estateagentannouncementservice.model.enums.AnnouncementType;
import com.patika.estateagentannouncementservice.repository.AnnouncementRepository;
import com.patika.estateagentannouncementservice.converter.AnnouncementConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class AnnouncementService {

    private final AnnouncementRepository announcementRepository;
    private final AnnouncementConverter announcementConverter;
    private final UserService userService;

    @Autowired
    public AnnouncementService(AnnouncementRepository announcementRepository, AnnouncementConverter announcementConverter, UserService userService) {
        this.announcementRepository = announcementRepository;
        this.announcementConverter = announcementConverter;
        this.userService = userService;
    }

    public AnnouncementDTO createAnnouncement(CreateAnnouncementRequest request) {

        if(userService.getById(request.getUserId()).getTotalAnnouncementCount() >= 1 && userService.getById(request.getUserId()).getExpiryDate().isBefore(LocalDate.now())){

            Announcement announcement = new Announcement();
            announcement.setUserId(request.getUserId());
            announcement.setTitle(request.getTitle());
            announcement.setDescription(request.getDescription());
            announcement.setAnnouncementStatus(AnnouncementStatus.IN_REVIEW);
            announcement.setCreatedAt(LocalDateTime.now());
            announcement.setUpdatedAt(LocalDateTime.now());
            announcement.setValidUntil(LocalDateTime.now().plusDays(30));
            announcement.setType(AnnouncementType.valueOf(request.getType()));

            Announcement savedAnnouncement = announcementRepository.save(announcement);

            UserDTO userResponse = userService.getById(request.getUserId());
            userResponse.setTotalAnnouncementCount(userResponse.getTotalAnnouncementCount()-1);

            userService.updateUser(request.getUserId(), userResponse );

            return announcementConverter.convertToDTO(savedAnnouncement);
        }else {
            throw new NullPointerException();
        }

    }

    public AnnouncementDTO updateAnnouncement(Long id, UpdateAnnouncementRequest request) {
        Announcement announcement = announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement not found"));

        announcement.setTitle(request.getTitle());
        announcement.setDescription(request.getDescription());
        announcement.setAnnouncementStatus(AnnouncementStatus.valueOf(request.getStatus()));
        announcement.setUpdatedAt(LocalDateTime.now());

        Announcement updatedAnnouncement = announcementRepository.save(announcement);
        return announcementConverter.convertToDTO(updatedAnnouncement);
    }

    public void deleteAnnouncement(Long id) {
        announcementRepository.deleteById(id);
    }

    public AnnouncementDTO getAnnouncementById(Long id) {
        Announcement announcement = announcementRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Announcement not found"));

        return announcementConverter.convertToDTO(announcement);
    }

    public List<AnnouncementDTO> getAnnouncementsByUserId(Long userId, String status) {
        List<Announcement> announcements = announcementRepository.findAllByUserIdAndStatus(userId, status);
        return announcements.stream()
                .map(announcementConverter::convertToDTO)
                .collect(Collectors.toList());
    }
}
