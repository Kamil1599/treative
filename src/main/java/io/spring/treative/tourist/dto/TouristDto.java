package io.spring.treative.tourist.dto;

import io.spring.treative.tourist.Gender;
import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@Builder
public class TouristDto {

    private Long id;
    private String firstName;
    private String lastName;
    private Gender gender;
    private String country;
    private String remarks;
    private Timestamp dayOfBirth;

}
