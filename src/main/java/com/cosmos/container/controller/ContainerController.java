package com.cosmos.container.controller;

import com.cosmos.container.dto.ContainerDTO;
import com.cosmos.container.service.ContainerService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/container")
@RequiredArgsConstructor
public class ContainerController {
    private final ContainerService containerService;

    @PostMapping("/save")
    public String saveContainer(@RequestBody ContainerDTO containerDTO, @AuthenticationPrincipal UserDetails userDetails){
        containerDTO.setManagerId(userDetails.getUsername());
        return containerService.saveContainer(containerDTO);
    }

    @GetMapping("/posts")
    public List<ContainerDTO> getContainers(@AuthenticationPrincipal UserDetails userDetails){
        return containerService.getContainers(userDetails.getUsername());
    }
}
