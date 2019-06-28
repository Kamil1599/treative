package io.spring.treative.tourist.dto;

import io.spring.treative.common.Mapper;
import io.spring.treative.flight.dto.FlightMapper;
import io.spring.treative.tourist.Tourist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class TouristMapper implements Mapper<Tourist, TouristDto> {

    private FlightMapper flightMapper;

    @Autowired
    public void setFlightMapper(FlightMapper flightMapper) {
        this.flightMapper = flightMapper;
    }

    @Override
    public TouristDto toDto(Tourist tourist) {
        return TouristDto.builder()
                .id(tourist.getId())
                .firstName(tourist.getFirstName())
                .lastName(tourist.getLastName())
                .gender(tourist.getGender())
                .country(tourist.getCountry())
                .dayOfBirth(tourist.getDayOfBirth())
                .remarks(tourist.getRemarks())
                .build();
    }

    public TouristWithFlightsDto toTouristWithFlightsDto(Tourist tourist) {
        return TouristWithFlightsDto.builder()
                .id(tourist.getId())
                .firstName(tourist.getFirstName())
                .lastName(tourist.getLastName())
                .gender(tourist.getGender())
                .country(tourist.getCountry())
                .dayOfBirth(tourist.getDayOfBirth())
                .flights(flightMapper.toDtoList(tourist.getFlights()))
                .remarks(tourist.getRemarks())
                .build();
    }

    public Tourist toEntity(NewTouristDto dto) {
        Tourist tourist = new Tourist();
        tourist.setFirstName(dto.getFirstName());
        tourist.setLastName(dto.getLastName());
        tourist.setCountry(dto.getCountry());
        tourist.setDayOfBirth(dto.getDayOfBirth());
        tourist.setGender(dto.getGender());
        tourist.setRemarks(dto.getRemarks());
        return tourist;
    }
}
