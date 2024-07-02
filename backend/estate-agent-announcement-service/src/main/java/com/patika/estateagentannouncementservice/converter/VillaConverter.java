package com.patika.estateagentannouncementservice.converter;

import com.patika.estateagentannouncementservice.dto.request.VillaSaveRequest;
import com.patika.estateagentannouncementservice.dto.response.VillaResponse;
import com.patika.estateagentannouncementservice.model.Villa;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class VillaConverter {
    public static Villa toVilla(VillaSaveRequest request) {
        return new Villa(request.getId(),request.getName(),request.getDescription(),request.getPrice(),request.getM2(),request.getRoomCount(),request.getHallCount(), request.getFloorCount(),request.isHasPool());
    }

    public static VillaResponse toResponse(Villa villa) {
        return VillaResponse.builder()
                .m2(villa.getM2())
                .id(villa.getId())
                .price(villa.getPrice())
                .name(villa.getName())
                .description(villa.getDescription())
                .hallCount(villa.getHallCount())
                .roomCount(villa.getRoomCount())
                .build();
    }

    public static List<VillaResponse> toResponse(List<Villa> villas) {
        return villas
                .stream()
                .map(VillaConverter::toResponse)
                .toList();
    }
}
