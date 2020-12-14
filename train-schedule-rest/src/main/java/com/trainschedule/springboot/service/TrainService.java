package com.trainschedule.springboot.service;

import java.text.ParseException;
import java.util.List;

import com.trainschedule.springboot.model.Train;

public interface TrainService {
	Train createTrain(Train train);

	Train updateTrain(Train train) throws ParseException;

	List<Train> getAllTrain();

	Train getTrainById(long trainId);

	void deleteTrain(long id);
}
