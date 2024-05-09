package com.cosmos.container.controller;

import com.cosmos.container.dto.ManagerDTO;
import com.cosmos.container.dto.MemberDTO;
import com.cosmos.container.service.SaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
public class SaveController {
    private final SaveService saveService;

    @GetMapping("/emails")
    public ResponseEntity<?> checkEmail(@RequestParam("email") String email){
        return saveService.checkEmail(email);
    }

    @GetMapping("/ids")
    public ResponseEntity<?> checkId(@RequestParam("id") String id){
        return saveService.checkId(id);
    }

    @PostMapping("/members")
    public ResponseEntity<?> saveMember(@RequestBody MemberDTO memberDTO){
        saveService.saveMember(memberDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(memberDTO);
    }

    @PostMapping("/managers")
    public ResponseEntity<?> saveManager(@RequestBody ManagerDTO managerDTO){
        saveService.saveManager(managerDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(managerDTO);
    }
}
