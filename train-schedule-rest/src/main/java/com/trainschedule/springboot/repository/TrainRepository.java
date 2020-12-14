package com.trainschedule.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trainschedule.springboot.model.Train;

public interface TrainRepository extends JpaRepository<Train, Long> {

}
