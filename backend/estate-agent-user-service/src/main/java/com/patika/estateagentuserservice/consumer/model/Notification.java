package com.patika.kitapyurdumnotificationservice.consumer.model;
import com.patika.kitapyurdumnotificationservice.consumer.dto.NotificationDto;
import lombok.Builder;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "notifications")
@Builder
public class Notification {

    @Id
    private String id;

    private NotificationDto notificationDto;
}
