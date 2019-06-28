package io.spring.treative.tourist;

import io.spring.treative.tourist.dto.NewTouristDto;
import io.spring.treative.tourist.dto.TouristDto;
import io.spring.treative.tourist.dto.TouristMapper;
import io.spring.treative.tourist.dto.TouristWithFlightsDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@AllArgsConstructor
public class TouristService {

    private TouristRepository touristRepository;
    private TouristMapper mapper;

    public Tourist getTourist(Long id) {
        return touristRepository.getOne(id);
    }

    void addTourist(NewTouristDto touristDto) {
        Tourist tourist = mapper.toEntity(touristDto);
        touristRepository.save(tourist);
    }

    void deleteTourist(Long id) {
        touristRepository.deleteById(id);
    }

    Page<TouristWithFlightsDto> getTouristsByPage(Pageable pageable) {
        Page<Tourist> page = touristRepository.findAll(pageable);
        return page.map(mapper::toTouristWithFlightsDto);
    }

    List<TouristDto> search(String term) {
        return mapper.toDtoList(touristRepository.findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(term, term));
    }
}
