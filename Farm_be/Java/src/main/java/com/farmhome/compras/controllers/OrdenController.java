package com.farmhome.compras.controllers;

import java.util.List;

import com.farmhome.compras.exceptions.OrdenNotFoundException;
import com.farmhome.compras.models.Orden;
import com.farmhome.compras.repositories.OrdenRepository;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrdenController {
    
    private final OrdenRepository ordenRepository;

    public OrdenController(OrdenRepository ordenRepository) {
        this.ordenRepository = ordenRepository;
    }

    @GetMapping("/ordenes/lista")
    List<Orden> getOrden(){
        return ordenRepository.findAll();
    }
    
    @GetMapping("/ordenesbyusername/{username}")
    List<Orden> getOrdenByUsername(@PathVariable String username){
        return ordenRepository.findByUsername(username);
    }

    @GetMapping("/ordenesbyid/{id}")
    Orden getOrdenById(@PathVariable String id){
        Orden orden = ordenRepository.findById(id).orElse(null);
        if (orden == null){
            throw new OrdenNotFoundException("La orden que quieres buscar no se pudo encontrar");
        }
        return ordenRepository.findById(id).orElse(null);
    }

    @PostMapping("/ordenes")
    Orden newOrden(@RequestBody Orden orden){
        return ordenRepository.save(orden);
    }


    @DeleteMapping("/ordenes/delete/{id}")
    String deleteOrden(@PathVariable String id){
        Orden orden = ordenRepository.findById(id).orElse(null);
        if(orden ==null){
            throw new OrdenNotFoundException("La orden que quieres eliminar no se pudo encontrar");
        }
        this.ordenRepository.deleteById(id);
        return "Eliminacion completa";
    }

}
