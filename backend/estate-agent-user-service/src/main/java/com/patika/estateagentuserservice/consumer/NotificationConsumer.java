package com.patika.kitapyurdumnotificationservice.consumer;

import com.patika.kitapyurdumnotificationservice.consumer.dto.NotificationDto;
import com.patika.kitapyurdumnotificationservice.consumer.notification.Notification;
import com.patika.kitapyurdumnotificationservice.consumer.notification.NotificationFactory;
import com.patika.kitapyurdumnotificationservice.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

import static com.patika.kitapyurdumnotificationservice.consumer.converter.InvoiceConverter.convertInvoice;
import static com.patika.kitapyurdumnotificationservice.consumer.converter.NotificationDtoConverter.convert;


@Component
@Slf4j
@RequiredArgsConstructor
public class NotificationConsumer {

    private final NotificationRepository notificationRepository;

    @RabbitListener(queues = "${notification.queue.order}")
    public void sendOrderNotification(NotificationDto notificationDto) {
        log.info("Order notification: ");

        try {
            Notification notification = NotificationFactory.createNotification(notificationDto.getNotificationType());
            notification.sendNotification(notificationDto.getProductDtoList().toString() + notificationDto.getTotalAmount().toString());
            notificationRepository.save(convert(notificationDto));
        } catch (IllegalArgumentException e) {
            log.warn(e.getMessage());
        }
    }

}