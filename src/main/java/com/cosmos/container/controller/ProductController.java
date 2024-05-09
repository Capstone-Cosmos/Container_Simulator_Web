package com.cosmos.container.controller;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/products")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping()
    public ResponseEntity<?> saveProduct(@RequestBody ProductDTO productDTO, @AuthenticationPrincipal UserDetails userDetails){
        productService.saveProduct(productDTO, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.CREATED).body(productDTO);
    }

    @GetMapping()
    public List<ProductDTO> getProducts(@AuthenticationPrincipal UserDetails userDetails){
        return productService.getProducts(userDetails.getUsername());
    }

    @PostMapping("/delete")
    public ResponseEntity<?> deleteProduct(@RequestBody Map<String, List<Long>> requestBody, @AuthenticationPrincipal UserDetails userDetails){
        List<Long> productIds = requestBody.get("productIds");
        productService.deleteProduct(userDetails.getUsername(), productIds);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping("/wait")
    public List<ProductDTO> getWaitingProducts(){
        return productService.getWaitingProducts();
    }

    @GetMapping("/decide")
    public List<ProductDTO> getDecidedProducts(@AuthenticationPrincipal UserDetails userDetails){
        return productService.getDecidedProducts(userDetails.getUsername());
    }

    @PatchMapping("/assign")
    public ResponseEntity<?> assignProduct(@RequestParam("productId") long productId,
                                @RequestParam("containerId") long containerId,
                                @AuthenticationPrincipal UserDetails userDetails){
        productService.assignProduct(productId, containerId, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping("/accept")
    public ResponseEntity<?> acceptProduct(@RequestParam("id") Long id, @AuthenticationPrincipal UserDetails userDetails){
        productService.acceptProduct(id, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping("/reject")
    public ResponseEntity<?> rejectProduct(@RequestParam("id") Long id, @AuthenticationPrincipal UserDetails userDetails){
        productService.rejectProduct(id, userDetails.getUsername());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping("/cancel")
    public ResponseEntity<?> cancelProduct(@RequestParam("id") Long id){
        productService.cancelProduct(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
