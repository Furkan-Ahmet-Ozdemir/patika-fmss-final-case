package com.patika.kitapyurdumnotificationservice.consumer.dto;

import com.patika.kitapyurdumnotificationservice.consumer.dto.enums.NotificationType;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.util.List;
import java.util.Set;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@ToString
@Data

public class NotificationDto {

    private NotificationType notificationType;
    private Set<ProductDto> productDtoList;
    private BigDecimal totalAmount;

}
