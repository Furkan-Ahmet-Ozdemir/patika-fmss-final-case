package com.patika.estateagentserviceregistry;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class EstateAgentServiceRegistryApplication {

    public static void main(String[] args){
        SpringApplication.run(EstateAgentServiceRegistryApplication.class, args);
    }

}
