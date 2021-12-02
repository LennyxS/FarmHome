package com.farmhome.compras.repositories;

import java.util.List;

import com.farmhome.compras.models.Orden;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface OrdenRepository extends MongoRepository <Orden, String> {

    List<Orden> findByUsername(String username);
}
