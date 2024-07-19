package com.patika.kitapyurdumnotificationservice.consumer.dto;
import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Data
public class CustomerDto {

    private String name;
    private String surname;
    private String email;

}
