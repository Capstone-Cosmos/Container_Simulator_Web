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

    @GetMapping("/manager/auth/email-check")
    public String checkManagerEmail(@RequestParam("managerEmail") String managerEmail){
        return saveService.checkManagerEmail(managerEmail);
    }

    @GetMapping("/manager/auth/id-check")
    public String checkManagerId(@RequestParam("managerId") String managerId){
        return saveService.checkManagerId(managerId);
    }

    @GetMapping("/member/auth/email-check")
    public String checkMemberEmail(@RequestParam("memberEmail") String memberEmail){
        return saveService.checkMemberEmail(memberEmail);
    }

    @GetMapping("/member/auth/id-check")
    public String checkMemberId(@RequestParam("memberId") String memberId){
        return saveService.checkMemberId(memberId);
    }

    @PostMapping("/member/save")
    public String saveMember(@RequestBody MemberDTO memberDTO){
        saveService.saveMember(memberDTO);
        return "Ok";
    }

    @PostMapping("/manager/save")
    public String saveManager(@RequestBody ManagerDTO managerDTO){
        saveService.saveManager(managerDTO);
        return "Ok";
    }
}
