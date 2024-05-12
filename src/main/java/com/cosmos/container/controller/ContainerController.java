package com.cosmos.container.controller;

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

    @GetMapping("/{container-id}")
    public List<ProductDTO> getProducts(@PathVariable("container-id") Long containerId){
        return containerService.getProducts(containerId);
    }

    @PatchMapping("/{container-id}/add")
    public ResponseEntity<?> assignProduct(@PathVariable("container-id") long containerId,
                                           @RequestParam("productId") long productId,
                                           @AuthenticationPrincipal UserDetails userDetails){
        containerService.assignProduct(containerId, productId, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping("/{container-id}/cancel")
    public ResponseEntity<?> cancelProduct(@PathVariable("container-id") long containerId,
                                           @RequestParam("productId") long productId,
                                           @AuthenticationPrincipal UserDetails userDetails){
        containerService.cancelProduct(containerId, productId, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
