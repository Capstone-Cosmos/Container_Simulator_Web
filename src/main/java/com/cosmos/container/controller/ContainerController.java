package com.cosmos.container.controller;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.ContainerDTO;
import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.service.ContainerService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/containers")
@RequiredArgsConstructor
public class ContainerController {
    private final ContainerService containerService;

    @PostMapping()
    public ResponseEntity<?> saveContainer(@RequestBody ContainerDTO containerDTO, @AuthenticationPrincipal UserDetails userDetails){
        containerService.saveContainer(containerDTO, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED).body(containerDTO);
    }

    @GetMapping()
    public List<ContainerDTO> getContainers(@AuthenticationPrincipal UserDetails userDetails){
        return containerService.getContainers(userDetails.getUsername());
    }

    @DeleteMapping()
    public ResponseEntity<?> deleteContainer(@RequestParam("id") Long id, @AuthenticationPrincipal UserDetails userDetails){
        containerService.deleteContainer(id, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
