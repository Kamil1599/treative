package io.spring.treative.flight;

import io.spring.treative.flight.dto.FlightDto;
import io.spring.treative.flight.dto.FlightsWithTouristsDto;
import io.spring.treative.flight.dto.NewFlightDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/flights")
@AllArgsConstructor
public class FlightController {

    private FlightService flightService;

    @GetMapping
    public Page<FlightsWithTouristsDto> getFlightsByPage(Pageable pageable) {
        return flightService.getFlightsByPage(pageable);
    }

    @GetMapping("/all")
    public List<FlightDto> getAllFlights() {
        return flightService.getAllFlights();
    }

    @PostMapping
    public FlightDto addFlight(@Valid @RequestBody NewFlightDto flightDto) {
        return flightService.addFlight(flightDto);
    }

    @DeleteMapping("/{id}")
    public void deleteFlight(@PathVariable Long id) {
        flightService.deleteFlight(id);
    }

    @PostMapping("{touristId}/{flightId}")
    public void addTouristToFlight(@PathVariable Long touristId, @PathVariable Long flightId) {
        flightService.addTouristToFlight(touristId, flightId);
    }

    @DeleteMapping("/{touristId}/{flightId}")
    public void removeTouristFromFlight(@PathVariable Long touristId, @PathVariable Long flightId) {
        flightService.removeTouristFromFlight(touristId, flightId);
    }

    @ResponseStatus(HttpStatus.CONFLICT)
    @ExceptionHandler(IllegalStateException.class)
    public String handle(IllegalStateException e) {
        return e.getMessage();
    }
}