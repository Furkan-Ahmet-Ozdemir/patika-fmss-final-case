package com.patika.estateagentannouncementservice.controller;
import com.patika.estateagentannouncementservice.dto.AnnouncementDTO;
import com.patika.estateagentannouncementservice.dto.request.CreateAnnouncementRequest;
import com.patika.estateagentannouncementservice.dto.request.UpdateAnnouncementRequest;
import com.patika.estateagentannouncementservice.service.AnnouncementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/announcements")
public class AnnouncementController {

    private final AnnouncementService announcementService;

    @Autowired
    public AnnouncementController(AnnouncementService announcementService) {
        this.announcementService = announcementService;
    }

    @PostMapping
    public ResponseEntity<AnnouncementDTO> createAnnouncement(@RequestBody CreateAnnouncementRequest request) {
        AnnouncementDTO announcementDTO = announcementService.createAnnouncement(request);
        return ResponseEntity.ok(announcementDTO);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AnnouncementDTO> updateAnnouncement(@PathVariable Long id,
                                                              @RequestBody UpdateAnnouncementRequest request) {
        AnnouncementDTO announcementDTO = announcementService.updateAnnouncement(id, request);
        return ResponseEntity.ok(announcementDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnouncement(@PathVariable Long id) {
        announcementService.deleteAnnouncement(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnnouncementDTO> getAnnouncementById(@PathVariable Long id) {
        AnnouncementDTO announcementDTO = announcementService.getAnnouncementById(id);
        return ResponseEntity.ok(announcementDTO);
    }

    @GetMapping("/user/{userId}/status/{status}")
    public ResponseEntity<List<AnnouncementDTO>> getAnnouncementsByUserId(@PathVariable Long userId,
                                                                          @PathVariable String status) {
        List<AnnouncementDTO> announcementDTOs = announcementService.getAnnouncementsByUserId(userId, status);
        return ResponseEntity.ok(announcementDTOs);
    }
}