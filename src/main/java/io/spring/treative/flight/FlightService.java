package io.spring.treative.flight;

import io.spring.treative.flight.dto.FlightDto;
import io.spring.treative.flight.dto.FlightMapper;
import io.spring.treative.flight.dto.FlightsWithTouristsDto;
import io.spring.treative.flight.dto.NewFlightDto;
import io.spring.treative.tourist.Tourist;
import io.spring.treative.tourist.TouristService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class FlightService {

    private TouristService touristService;
    private FlightRepository flightRepository;
    private FlightMapper mapper;

    FlightDto addFlight(NewFlightDto flightDto) {
        Flight flight = mapper.toEntity(flightDto);
        flight = flightRepository.save(flight);
        return mapper.toDto(flight);
    }

    void deleteFlight(Long id) {
        flightRepository.deleteById(id);
    }

    Page<FlightsWithTouristsDto> getFlightsByPage(Pageable pageable) {
        Page<Flight> page = flightRepository.findAll(pageable);
        return page.map(mapper::toFlightWithTouristsDto);
    }

    void addTouristToFlight(Long touristId, Long flightId) {
        Flight flight = flightRepository.getOne(flightId);
        Tourist tourist = touristService.getTourist(touristId);
        if (flight.getTourists().size() == flight.getNumberOfSeats()) {
            throw new IllegalStateException("All seats on this flight are already taken");
        } else if (flight.getTourists().contains(tourist)) {
            throw new IllegalStateException("Tourist already is on this flight");
        } else {
            flight.addTourist(tourist);
            flightRepository.save(flight);
        }
    }

    void removeTouristFromFlight(Long touristId, Long flightId) {
        Flight flight = flightRepository.getOne(flightId);
        flight.removeTourist(touristId);
        flightRepository.save(flight);
    }

    List<FlightDto> getAllFlights() {
        return mapper.toDtoList(flightRepository.findAll());
    }
}