package io.spring.treative.flight.dto;

import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.sql.Timestamp;

@Getter
@Builder
public class FlightDto {

    private Long id;
    private Timestamp departureDateTime;
    private Timestamp arrivalDateTime;
    private Integer numberOfSeats;
    private BigDecimal ticketPrice;
    private Integer seatsTaken;
}
