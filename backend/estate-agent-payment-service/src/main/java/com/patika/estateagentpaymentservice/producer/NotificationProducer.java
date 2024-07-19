package com.patika.kitapyurdum.producer;


import com.patika.kitapyurdum.config.RabbitConfig;
import com.patika.kitapyurdum.producer.dto.NotificationDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.stereotype.Component;


@RequiredArgsConstructor
@Component
@Slf4j
public class NotificationProducer {

    private final AmqpTemplate rabbitTemplate;

//    @Value("${notification.exchange}")
//    private String notificationExchange;
//
//    @Value("${notification.routingkey.order}")
//    private String routingKeyOrder;
//
//    @Value("${notification.routingkey.invoice}")
//    private String routingKeyInvoice;

    private final RabbitConfig rabbitConfig;

    public void sendOrderCreatedNotification(NotificationDto notificationDto) {
        log.debug("Sending order created notification: {}", notificationDto);
        rabbitTemplate.convertAndSend(rabbitConfig.getExchange(),rabbitConfig.getRoutingKeyOrder(), notificationDto);
        log.info("Order notification sent. Exchange: {}, RoutingKey: {}", rabbitConfig.getExchange(), rabbitConfig.getRoutingKeyOrder());
    }

//    public void sendInvoiceSendedNotification(Invoice invoice) {
//        log.debug("Sending invoice sent notification: {}", invoice);
//        rabbitTemplate.convertAndSend(notificationExchange, routingKeyInvoice, invoice);
//        log.info("Invoice notification sent. Exchange: {}, RoutingKey: {}", notificationExchange, routingKeyInvoice);
//    }
}

