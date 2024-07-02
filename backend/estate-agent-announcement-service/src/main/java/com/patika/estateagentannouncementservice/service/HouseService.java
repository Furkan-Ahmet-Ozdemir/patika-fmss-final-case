//package com.example.patikafmssfinalcase.service;
//
//import com.patika.estateagentannouncementservice.converter.HouseConverter;
//import com.patika.estateagentannouncementservice.dto.request.HouseSaveRequest;
//import com.patika.estateagentannouncementservice.dto.response.HouseResponse;
//import com.patika.estateagentannouncementservice.model.House;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@RequiredArgsConstructor
//@Service
//@Slf4j
//public class HouseService {
//
//    private final HouseRepository houseRepository;
//
//    public void save(HouseSaveRequest request) throws ClassNotFoundException{
//
//        Optional<House> foundHouse = houseRepository.findById(request.getId());
//
//        if(foundHouse.isPresent()) {
//            log.error("HOUSE_ALREADY_EXIST");
//            throw new ClassNotFoundException();
//        }
//
//        House house = HouseConverter.toHouse(request);
//
//        houseRepository.create(house);
//
//        log.info("House created. Name: "  + house.getName() + "id: " + house.getId());
//    }
//
//    public List<House> getHouseList(){
//        return (houseRepository.getHouseList());
//    }
//
//    public List<HouseResponse> getHouseResponseList(){
//        return HouseConverter.toHouseResponse(houseRepository.getHouseList());
//    }
//
//}
