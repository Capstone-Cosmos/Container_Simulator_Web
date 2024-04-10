package com.cosmos.container.controller;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/member/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping("/save")
    public String saveProduct(@RequestBody ProductDTO productDTO){
        return productService.saveProduct(productDTO);
    }

}
