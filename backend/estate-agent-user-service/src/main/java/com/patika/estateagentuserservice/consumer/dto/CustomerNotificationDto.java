package com.patika.kitapyurdumnotificationservice.consumer.dto;
import com.patika.kitapyurdumnotificationservice.consumer.dto.enums.NotificationType;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString

public class CustomerNotificationDto {
    private NotificationType notificationType;
    private CustomerDto customerDto;
}
