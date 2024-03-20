package com.cosmos.container.controller;

import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.service.SaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequiredArgsConstructor
public class SaveController {
    private final SaveService memberService;

    @GetMapping("/")
    public String memberSaveForm() {
        return "saveMember";
    }

    @PostMapping("/member/save")
    public String save(@ModelAttribute MemberDTO memberDTO){
        System.out.println("MemberController.save");
        System.out.println("memberDTO = " + memberDTO);
        memberService.save(memberDTO);
        return "saveMember";
    }
}
