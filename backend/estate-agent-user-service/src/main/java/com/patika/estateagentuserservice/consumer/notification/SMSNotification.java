package com.patika.kitapyurdumnotificationservice.consumer.notification;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class SMSNotification implements Notification {

    @Override
    public void sendNotification(String message) {
        log.info("SMS Gönderildi. Mesaj: " + message);
    }
}