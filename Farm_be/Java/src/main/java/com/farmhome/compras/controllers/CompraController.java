package com.farmhome.compras.controllers;

import java.util.List;

import com.farmhome.compras.exceptions.CompraNotFoundException;
import com.farmhome.compras.models.Compra;
import com.farmhome.compras.repositories.CompraRepository;
import org.springframework.web.bind.annotation.*;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CompraController {

    private final CompraRepository compraRepository;

    public CompraController(CompraRepository compraRepository) {
        this.compraRepository = compraRepository;
    }

    @GetMapping("/compras/lista")
    List<Compra> getCompra(){
        return compraRepository.findAll();
    }
    
    @GetMapping("/comprasbyusername/{username}")
    List<Compra> getCompraByUsername(@PathVariable String username){
        return compraRepository.findByUsername(username);
    }

    @GetMapping("/comprasbyid/{id}")
    Compra getCompraById(@PathVariable String id){
        Compra compra = compraRepository.findById(id).orElse(null);
        if (compra == null){
            throw new CompraNotFoundException("La compra que quieres buscar no se pudo encontrar");
        }
        return compraRepository.findById(id).orElse(null);
    }

    @PostMapping("/compras")
    Compra newCompra(@RequestBody Compra compra){
        return compraRepository.save(compra);
    }

    /*@DeleteMapping(path = "/compra/{id}")
    public Void deleteCompra(@PathVariable String id){
        compraRepository.deleteById(id);
        return null;
    }*/
    @DeleteMapping("/compras/delete/{id}")
    String deleteCompra(@PathVariable String id){
        Compra compra = compraRepository.findById(id).orElse(null);
        if(compra ==null){
            throw new CompraNotFoundException("La compra que quieres eliminar no se pudo encontrar");
        }
        this.compraRepository.deleteById(id);
        return "Eliminacion completa";
    }
    
}
