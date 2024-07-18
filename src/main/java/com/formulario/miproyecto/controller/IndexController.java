package com.formulario.miproyecto.controller;

import org.springframework.web.bind.annotation.*;
import com.formulario.miproyecto.model.User;

@RestController
@RequestMapping("/api")
public class IndexController {

    @PostMapping("/submit")
    public User submitForm(@RequestBody User user) {
        System.out.println("Datos recibidos: " + user);
        return user; 
    }
}
