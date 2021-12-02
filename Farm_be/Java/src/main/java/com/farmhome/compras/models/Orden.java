package com.farmhome.compras.models;

import org.springframework.data.annotation.Id;


public class Orden {
    @Id
    private String id;
    private String username;
    private Integer product_id;
    private Integer product_quantity;
    private Integer subtotal;
    
    public Orden(String id, String username, Integer product_id, Integer product_quantity, Integer subtotal) {
        this.id = id; 
        this.username = username;
        this.product_id = product_id;
        this.product_quantity = product_quantity;
        this.subtotal = subtotal;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Integer getProduct_id() {
        return product_id;
    }

    public void setProduct_id(Integer product_id) {
        this.product_id = product_id;
    }


    public Integer getProduct_quantity() {
        return product_quantity;
    }

    public void setProduct_quantity(Integer product_quantity) {
        this.product_quantity = product_quantity;
    }

    public Integer getSubtotal() {
        return subtotal;
    }

    public void setSubtotal(Integer subtotal) {
        this.subtotal = subtotal;
    }


    public static void remove(String id2) {
    }
    
    

    
    
    
 

    /*private int id_venta
    private int product_id*/
        
}
