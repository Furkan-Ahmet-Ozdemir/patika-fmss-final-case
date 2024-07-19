package com.patika.kitapyurdum.producer.dto;

import com.patika.kitapyurdum.model.Order;
import com.patika.kitapyurdum.producer.dto.enums.NotificationType;
import lombok.*;

import java.math.BigDecimal;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class NotificationDto {

    private NotificationType notificationType;
    private Order order;
    private BigDecimal totalAmount;

}
