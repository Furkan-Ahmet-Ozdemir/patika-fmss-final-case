package com.patika.kitapyurdumnotificationservice.consumer.notification;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Data
public class MailNotification implements Notification {

    @Override
    public void sendNotification(String message) {
        log.info("Mail Gönderildi. Mesaj: " + message);
    }

}
