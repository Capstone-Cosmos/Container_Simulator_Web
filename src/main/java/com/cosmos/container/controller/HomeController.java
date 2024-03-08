package com.cosmos.container.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }
}
