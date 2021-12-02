package com.farmhome.compras.models;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;


public class Compra {
    
    @Id
    private String id;
    private String username;
    private Integer id_user;
    private String id_orden;
    private LocalDateTime buyout_day;
    
    public Compra(String id, String id_orden, String username, Integer id_user) {
        this.id = id;
        this.username = username;
        this.id_user = id_user;
        this.id_orden = id_orden;
        buyout_day = LocalDateTime.now();
    }

    
    public String getId_orden() {
        return id_orden;
    }


    public void setId_orden(String id_orden) {
        this.id_orden = id_orden;
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

    public Integer getId_user() {
        return id_user;
    }
    
    public LocalDateTime getBuyout_day() {
        return buyout_day;
    }

    public void setBuyout_day(LocalDateTime buyout_day) {
        this.buyout_day = buyout_day;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    

    

    
}
 