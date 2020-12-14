package com.trainschedule.springboot;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.trainschedule.springboot.model.Train;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Date;

@SpringBootApplication
public class ServiceApplication {

    public static void main(String[] args) throws JsonProcessingException {
		SpringApplication.run(ServiceApplication.class, args);
    }

}
