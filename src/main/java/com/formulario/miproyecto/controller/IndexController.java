package com.formulario.miproyecto.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.formulario.miproyecto.model.User;

@Controller
public class IndexController {

    @GetMapping("/")
    public String showForm(Model model) {
        model.addAttribute("user", new User());
        return "front/index";
    }

    @PostMapping("/")
    public String submitForm(@ModelAttribute User user, Model model) {
        model.addAttribute("user", user);  // Agregar el objeto User al modelo
        return "front/index";
    }
}
