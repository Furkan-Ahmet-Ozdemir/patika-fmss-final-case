package com.patika.estateagentannouncementservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "houses")
public class House extends Residence {

    @Id
    private Long id;

    private Integer floorNumber;
    private Integer flatNumber;

    public House(Long id, String name, String description, Long price, Integer m2, Integer roomCount, Integer hallCount, Integer floorNumber, Integer flatNumber){
        super(id, name, description, price, m2, roomCount, hallCount);
        this.floorNumber = floorNumber;
        this.flatNumber = flatNumber;
    }
}
