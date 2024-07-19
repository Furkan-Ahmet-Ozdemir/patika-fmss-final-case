package com.patika.kitapyurdumnotificationservice.consumer.dto;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Data

public class InvoiceDto {
    private BigDecimal total;
    private LocalDateTime createDate;
}
