package io.spring.treative.tourist;

import io.spring.treative.tourist.dto.NewTouristDto;
import io.spring.treative.tourist.dto.TouristDto;
import io.spring.treative.tourist.dto.TouristWithFlightsDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/tourists")
@AllArgsConstructor
public class TouristController {

    private TouristService touristService;

    @GetMapping
    public Page<TouristWithFlightsDto> getAllTourists(Pageable pageable) {
        return touristService.getTouristsByPage(pageable);
    }

    @PostMapping
    public void addTourist(@Valid @RequestBody NewTouristDto touristDto) {
        touristService.addTourist(touristDto);
    }

    @DeleteMapping("/{id}")
    public void deleteTourist(@PathVariable Long id) {
        touristService.deleteTourist(id);
    }

    @GetMapping("/search/{term}")
    public List<TouristDto> searchTourists(@PathVariable String term) {
        return touristService.search(term);
    }
}
