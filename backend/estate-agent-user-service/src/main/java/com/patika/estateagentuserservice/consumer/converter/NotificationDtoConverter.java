package com.patika.kitapyurdumnotificationservice.consumer.converter;
import com.patika.kitapyurdumnotificationservice.consumer.dto.NotificationDto;
import com.patika.kitapyurdumnotificationservice.consumer.model.Notification;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class NotificationDtoConverter {
    private static Long id= 0L;

    public static Notification convert(NotificationDto notificationDto) {
        return Notification.builder()
                .notificationDto(notificationDto)
                .build();
    }
}
