package io.spring.treative.tourist;

import io.spring.treative.flight.Flight;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Tourist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    @Enumerated(value = EnumType.STRING)
    private Gender gender;
    @NotNull
    private String country;
    private String remarks;
    @NotNull
    private Timestamp dayOfBirth;
    @ManyToMany(mappedBy = "tourists")
    private List<Flight> flights = new ArrayList<>();
}
