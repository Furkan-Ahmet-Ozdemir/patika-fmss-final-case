package com.patika.kitapyurdumnotificationservice.consumer.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Data
public class ProductDto {

    private String name;
    private String desc;

}
