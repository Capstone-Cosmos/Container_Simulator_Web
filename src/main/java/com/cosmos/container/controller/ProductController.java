package com.cosmos.container.controller;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.jwt.JWTUtil;
import com.cosmos.container.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/member/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping("/save")
    public String saveProduct(@RequestBody ProductDTO productDTO, @AuthenticationPrincipal UserDetails userDetails){
        productDTO.setMemberId(userDetails.getUsername());
        return productService.saveProduct(productDTO);
    }

    @GetMapping("/posts")
    public List<ProductDTO> getProducts(@AuthenticationPrincipal UserDetails userDetails){
        System.out.println(userDetails.getUsername());
        return productService.getProducts(userDetails.getUsername());
    }

    @PostMapping("/delete")
    public String deleteProduct(@RequestBody Map<String, List<Long>> requestBody, @AuthenticationPrincipal UserDetails userDetails){
        List<Long> productIds = requestBody.get("productIds");
        return productService.deleteProduct(userDetails.getUsername(), productIds);
    }
}
