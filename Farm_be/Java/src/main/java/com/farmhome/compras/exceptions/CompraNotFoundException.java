package com.farmhome.compras.exceptions;

public class CompraNotFoundException extends RuntimeException {
    public CompraNotFoundException(String message){
        super(message);
    }
}
