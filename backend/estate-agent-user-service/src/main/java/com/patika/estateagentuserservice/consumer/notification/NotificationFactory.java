package com.patika.kitapyurdumnotificationservice.consumer.notification;
import com.patika.kitapyurdumnotificationservice.consumer.dto.enums.NotificationType;

public class NotificationFactory {
    public static Notification createNotification(NotificationType notificationType){
        switch (notificationType) {
            case MAIL:
                return new MailNotification();
            case SMS:
                return new SMSNotification();
            case PUSH_NOTIFICATION:
                return new PushNotification();
            default:
                throw new IllegalArgumentException("Unknown notification type: " + notificationType);
        }
    }

}