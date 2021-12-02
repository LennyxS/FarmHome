package com.farmhome.compras.exceptions;

public class OrdenNotFoundException extends RuntimeException {
    public OrdenNotFoundException(String message){
        super(message);
    }
}
