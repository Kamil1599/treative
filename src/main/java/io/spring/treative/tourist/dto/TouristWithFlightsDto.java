package io.spring.treative.tourist.dto;

import io.spring.treative.flight.dto.FlightDto;
import io.spring.treative.tourist.Gender;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;
import java.util.List;

@Getter
@Builder
public class TouristWithFlightsDto {

    private Long id;
    private String firstName;
    private String lastName;
    private Gender gender;
    private String country;
    private String remarks;
    private Timestamp dayOfBirth;
    private List<FlightDto> flights;
}
