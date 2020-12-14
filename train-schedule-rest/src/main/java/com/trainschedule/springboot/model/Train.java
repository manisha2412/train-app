package com.trainschedule.springboot.model;

import javax.persistence.*;
import java.time.Duration;
import java.util.Date;

@Entity
@Table(name = "trains")
public class Train {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "trainName")
    private String trainName;

    @Column(name = "startingStation")
    private String startingStation;

    @Column(name = "destinationStation")
    private String destinationStation;

    @Column(name = "departureTime")
    private Date departureTime;

    @Column(name = "arrivalTime")
    private Date arrivalTime;

    @Column(name = "duration")
    private Date duration;

    public long getId() {
        return id;
    }

    public String getTrainName() {
        return trainName;
    }

    public String getStartingStation() {
        return startingStation;
    }

    public String getDestinationStation() {
        return destinationStation;
    }

    public Date getDepartureTime() {
        return departureTime;
    }

    public Date getArrivalTime() {
        return arrivalTime;
    }

    public Date getDuration() {
        return duration;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public void setStartingStation(String startingStation) {
        this.startingStation = startingStation;
    }

    public void setDestinationStation(String destinationStation) {
        this.destinationStation = destinationStation;
    }

    public void setDepartureTime(Date departureTime) {
        this.departureTime = departureTime;
    }

    public void setArrivalTime(Date arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public void setDuration(Date duration) {
        this.duration = duration;
    }
}
