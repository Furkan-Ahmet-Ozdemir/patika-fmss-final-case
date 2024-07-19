package com.patika.kitapyurdumnotificationservice.consumer.notification;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class PushNotification implements Notification {

    @Override
    public void sendNotification(String message) {
        log.info("Push Notification Gönderildi. Mesaj: " + message);
    }
}