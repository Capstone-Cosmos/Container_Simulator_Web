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

    @PostMapping("/member/save")
    public String saveMember(@RequestBody MemberDTO memberDTO){
        System.out.println("memberDTO = " + memberDTO);
        saveService.saveMember(memberDTO);
        return "index";
    }

    @PostMapping("/manager/save")
    public String saveManager(@RequestBody ManagerDTO managerDTO){
        System.out.println("memberDTO = " + managerDTO);
        saveService.saveManager(managerDTO);
        return "index";
    }
}
