package com.cosmos.container.controller;

import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.service.SaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class SaveController {
    private final SaveService saveService;

    @GetMapping("/emails")
    public boolean checkEmail(@RequestParam("email") String email){
        return saveService.checkEmail(email);
    }

    @GetMapping("/ids")
    public boolean checkId(@RequestParam("id") String id){
        return saveService.checkId(id);
    }

    @PostMapping("/members")
    public String saveMember(@RequestBody MemberDTO memberDTO){
        saveService.saveMember(memberDTO);
        return "Ok";
    }

    @PostMapping("/managers")
    public String saveManager(@RequestBody ManagerDTO managerDTO){
        saveService.saveManager(managerDTO);
        return "Ok";
    }
}
