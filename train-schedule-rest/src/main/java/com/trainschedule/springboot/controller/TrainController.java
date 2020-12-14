package com.trainschedule.springboot.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.trainschedule.springboot.model.Train;
import com.trainschedule.springboot.service.TrainService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TrainController {

    @Autowired
    private TrainService trainService;

    @GetMapping("/trains")
    public ResponseEntity<List<Train>> getAllTrain() {
        return ResponseEntity.ok().body(trainService.getAllTrain());
    }

    @GetMapping("/trains/{id}")
    public ResponseEntity<Train> getTrainById(@PathVariable long id) {
        return ResponseEntity.ok().body(trainService.getTrainById(id));
    }

    @PostMapping("/trains")
    public ResponseEntity<Train> createTrain(@RequestBody Train train) {
        return ResponseEntity.ok().body(this.trainService.createTrain(train));
    }

    @PutMapping("/trains/{id}")
    public ResponseEntity<Train> updateTrain(@PathVariable long id, @RequestBody Train train) throws ParseException {
        train.setId(id);
        return ResponseEntity.ok().body(this.trainService.updateTrain(train));
    }

    @DeleteMapping("/trains/{id}")
    public HttpStatus deleteTrain(@PathVariable long id) {
        this.trainService.deleteTrain(id);
        return HttpStatus.OK;
    }
}
