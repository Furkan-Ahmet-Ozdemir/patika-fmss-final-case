package com.patika.estateagentannouncementservice.repository;

import com.patika.estateagentannouncementservice.model.Announcement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AnnouncementRepository extends JpaRepository<Announcement, Long> {
    List<Announcement> findAllByUserIdAndStatus(Long userId, String status);
}
