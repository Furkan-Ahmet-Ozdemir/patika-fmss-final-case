package com.patika.estateagentpackageservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class EstateAgentPackageServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(EstateAgentPackageServiceApplication.class, args);
	}

}
