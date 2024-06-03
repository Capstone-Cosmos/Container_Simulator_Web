package com.cosmos.container;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootApplication
public class ContainerApplication {
	public static void main(String[] args) {
		SpringApplication.run(ContainerApplication.class, args);
	}
}
