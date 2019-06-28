package io.spring.treative.tourist.dto;

import io.spring.treative.tourist.Gender;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import java.sql.Timestamp;

@Getter
public class NewTouristDto {

    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @NotNull
    private Gender gender;
    @NotNull
    private String country;
    private String remarks;
    @NotNull
    private Timestamp dayOfBirth;
}
