Clone this repository
Make sure you are using JDK 1.8 and Maven 3.x
You can build the project and run the tests by running mvn clean package
Once successfully built, you can run the service by one of these two methods:
mvn spring-boot:run


Here are some endpoints you can call:


GET -http://localhost:8080/trains
POST-http://localhost:8080/trains
payload-
{

    "trainName": "Express Train",
    "startingStation": "indore",
    "destinationStation": "pune",
    "departureTime": "2020-12-12T18:30:00.098Z",
    "arrivalTime": "2020-12-12T18:30:00.097Z",
    "duration": "2020-12-12T18:30:00.098Z"
}
DELETE- http://localhost:8080/trains/1
GET-http://localhost:8080/trains/1

