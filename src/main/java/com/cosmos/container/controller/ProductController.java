package com.cosmos.container.controller;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.jwt.JWTUtil;
import com.cosmos.container.service.ProductService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;
    private final JWTUtil jwtUtil;

    @PostMapping("/save")
    public String saveProduct(@RequestBody ProductDTO productDTO, HttpServletRequest request){
        String memberId = jwtUtil.getUsername(request.getHeader("access"));
        productDTO.setMemberId(memberId);
        return productService.saveProduct(productDTO);
    }

    @GetMapping("/posts")
    public List<ProductDTO> getProducts(HttpServletRequest request){
        String memberId = jwtUtil.getUsername(request.getHeader("access"));
        return productService.getProducts(memberId);
    }
}
