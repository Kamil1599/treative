package io.spring.treative.flight.dto;

import io.spring.treative.common.Mapper;
import io.spring.treative.flight.Flight;
import io.spring.treative.tourist.dto.TouristMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class FlightMapper implements Mapper<Flight, FlightDto> {

    private TouristMapper touristMapper;

    @Autowired
    public void setTouristMapper(TouristMapper touristMapper) {
        this.touristMapper = touristMapper;
    }

    @Override
    public FlightDto toDto(Flight flight) {
        return FlightDto.builder()
                .id(flight.getId())
                .departureDateTime(flight.getDepartureDateTime())
                .arrivalDateTime(flight.getArrivalDateTime())
                .numberOfSeats(flight.getNumberOfSeats())
                .ticketPrice(flight.getTicketPrice())
                .seatsTaken(flight.getTourists().size())
                .build();
    }

    public FlightsWithTouristsDto toFlightWithTouristsDto(Flight flight) {
        return FlightsWithTouristsDto.builder()
                .id(flight.getId())
                .departureDateTime(flight.getDepartureDateTime())
                .arrivalDateTime(flight.getArrivalDateTime())
                .numberOfSeats(flight.getNumberOfSeats())
                .ticketPrice(flight.getTicketPrice())
                .tourists(touristMapper.toDtoList(flight.getTourists()))
                .build();
    }

    public Flight toEntity(NewFlightDto flightDto) {
        Flight flight = new Flight();
        flight.setArrivalDateTime(flightDto.getArrivalDateTime());
        flight.setDepartureDateTime(flightDto.getDepartureDateTime());
        flight.setNumberOfSeats(flightDto.getNumberOfSeats());
        flight.setTicketPrice(flightDto.getTicketPrice());
        return flight;
    }
}
