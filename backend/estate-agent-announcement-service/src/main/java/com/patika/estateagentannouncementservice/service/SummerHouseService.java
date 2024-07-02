//package com.example.patikafmssfinalcase.service;
//
//import com.patika.estateagentannouncementservice.repository.ResidenceRepository;
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.stereotype.Service;
//
//import java.util.Optional;
//
//
//@RequiredArgsConstructor
//@Service
//@Slf4j
//public class SummerHouseService {
//
//    private final ResidenceRepository summerHouseRepository;
//
//    public void save(com.example.patikafmssfinalcase.dto.request.SummerHouseSaveRequest request) throws ClassNotFoundException{
//
//        Optional<com.example.patikafmssfinalcase.model.SummerHouse> foundSummerHouse = summerHouseRepository.findById(request.getId());
//
//        if(foundSummerHouse.isPresent()) {
//            log.error("SUMMER_HOUSE_ALREADY_EXIST");
//            throw new ClassNotFoundException();
//        }
//
//        com.example.patikafmssfinalcase.model.SummerHouse summerHouse = SummerHouseConverter.toSummerHouse(request);
//
//        summerHouseRepository.create(summerHouse);
//
//        log.info("SummerHouse created. {0} id: {}", summerHouse.getName() + summerHouse.getId());
//    }
//
//    public List<SummerHouse> getSummerHouseList(){
//        return summerHouseRepository.getSummerHouseList();
//    }
//
//    public List<SummerHouseResponse> getSummerHouseResponseList(){
//        return SummerHouseConverter.toResponse(summerHouseRepository.getSummerHouseList());
//    }
//
//
//
//}
