package io.spring.treative.common;

import java.util.List;
import java.util.stream.Collectors;

public interface Mapper<K, T> {

    T toDto(K k);

    default List<T> toDtoList(List<K> k){
        return k.stream()
                .map(this::toDto)
                .collect(Collectors.toList());
    }
}
