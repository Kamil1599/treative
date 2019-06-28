package io.spring.treative.flight.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;

@Getter
public class NewFlightDto {

    @NotNull
    private Timestamp departureDateTime;
    @NotNull
    private Timestamp arrivalDateTime;
    @NotNull
    private Integer numberOfSeats;
    @NotNull
    private BigDecimal ticketPrice;
}
