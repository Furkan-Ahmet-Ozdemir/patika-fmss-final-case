package com.patika.estateagentannouncementservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@ToString
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "residences")
public class Residence {
    @Id
    private Long id;
    private String name;
    private String description;
    private Long price;
    private Integer m2;
    private Integer roomCount;
    private Integer hallCount;

}


