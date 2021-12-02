package com.farmhome.compras.repositories;

import java.util.List;

import com.farmhome.compras.models.Compra;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CompraRepository extends MongoRepository<Compra, String > {

    List<Compra> findByUsername(String username);
    
}
