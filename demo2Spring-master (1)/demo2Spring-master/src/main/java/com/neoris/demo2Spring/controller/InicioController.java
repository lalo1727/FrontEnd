package com.neoris.demo2Spring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class InicioController {

    @GetMapping("/inicio")
    public String inicio() {
        return "inicio";
    }

}
