package io.spring.treative.tourist;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TouristRepository extends JpaRepository<Tourist, Long> {

    List<Tourist> findByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String term, String term2);
}
