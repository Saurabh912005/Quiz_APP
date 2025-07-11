package com.example.Quiz_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class QuizBackendApplication {

	public static void main(String[] args) {
		System.out.println("ENV URL = " + System.getenv("DATASOURCE_URL"));
		SpringApplication.run(QuizBackendApplication.class, args);
	}

}
