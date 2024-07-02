package com.example.patikafmssfinalcase.dto.response;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VillaResponse {
    private Long id;
    private String name;
    private String description;
    private Long price;
    private Integer m2;
    private Integer roomCount;
    private Integer hallCount;
    private Integer floorCount;
    private boolean hasPool;
}
