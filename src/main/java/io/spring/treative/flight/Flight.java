package io.spring.treative.flight;

import io.spring.treative.tourist.Tourist;
import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Data
@Entity
public class Flight {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotNull
    private Timestamp departureDateTime;
    @NotNull
    private Timestamp arrivalDateTime;
    @NotNull
    private Integer numberOfSeats;
    @NotNull
    private BigDecimal ticketPrice;
    @ManyToMany
    @JoinTable(name = "flights_tourists",
            joinColumns = {@JoinColumn(name = "tourist_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "flight_id", referencedColumnName = "id")}
    )
    private List<Tourist> tourists = new ArrayList<>();

    public void addTourist(Tourist tourist) {
        tourists.add(tourist);
    }

    public void removeTourist(Long touristId) {
        tourists.removeIf(tourist -> tourist.getId().equals(touristId));
    }
}
