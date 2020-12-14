package com.trainschedule.springboot.service;

import java.text.ParseException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.trainschedule.springboot.exception.ResourceNotFoundException;
import com.trainschedule.springboot.model.Train;
import com.trainschedule.springboot.repository.TrainRepository;

@Service
@Transactional
public class TrainServiceImpl implements TrainService {


    @Autowired
    private TrainRepository trainRepository;


    @Override
    public Train createTrain(Train train) {
        return trainRepository.save(train);
    }

    @Override
    public Train updateTrain(Train train) throws ParseException {
        Optional<Train> trainDb = this.trainRepository.findById(train.getId());

        if (trainDb.isPresent()) {
            Train trainUpdate = trainDb.get();
            trainUpdate.setId(train.getId());
            trainUpdate.setTrainName(train.getTrainName());
            trainUpdate.setStartingStation(train.getStartingStation());
            trainUpdate.setDestinationStation(train.getDestinationStation());
            trainUpdate.setArrivalTime(train.getArrivalTime());
            trainUpdate.setDepartureTime(train.getDepartureTime());
            trainUpdate.setDuration(train.getDuration());

            trainRepository.save(trainUpdate);
            return trainUpdate;
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + train.getId());
        }
    }

    @Override
    public List<Train> getAllTrain() {
        return this.trainRepository.findAll();
    }

    @Override
    public Train getTrainById(long trainId) {

        Optional<Train> trainDb = this.trainRepository.findById(trainId);

        if (trainDb.isPresent()) {
            return trainDb.get();
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + trainId);
        }
    }

    @Override
    public void deleteTrain(long trainId) {
        Optional<Train> trainDb = this.trainRepository.findById(trainId);

        if (trainDb.isPresent()) {
            this.trainRepository.delete(trainDb.get());
        } else {
            throw new ResourceNotFoundException("Record not found with id : " + trainId);
        }

    }

}
