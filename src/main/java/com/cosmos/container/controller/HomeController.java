package com.cosmos.container.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("/")
    public String homeForm() {
        return "index";
    }

    @GetMapping("/member")
    public String saveMemberForm() {return "saveMember";}

    @GetMapping("/manager")
    public String saveManagerForm() {return "saveManager";}

}
