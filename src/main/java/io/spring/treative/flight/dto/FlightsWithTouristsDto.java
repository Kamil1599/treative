package io.spring.treative.flight.dto;

import io.spring.treative.tourist.dto.TouristDto;
import lombok.Builder;
import lombok.Getter;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;

@Getter
@Builder
public class FlightsWithTouristsDto {

    private Long id;
    private Timestamp departureDateTime;
    private Timestamp arrivalDateTime;
    private Integer numberOfSeats;
    private BigDecimal ticketPrice;
    private List<TouristDto> tourists;
}
