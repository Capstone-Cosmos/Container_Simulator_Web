package com.cosmos.container.controller;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @PostMapping("/save")
    public String saveProduct(@RequestBody ProductDTO productDTO, @AuthenticationPrincipal UserDetails userDetails){
        return productService.saveProduct(productDTO, userDetails.getUsername());
    }

    @PatchMapping("/assign")
    public String assignProduct(@RequestParam("id") long id,
                                @RequestParam("containerId") long containerId,
                                @AuthenticationPrincipal UserDetails userDetails){
        productService.assignProduct(id, containerId, userDetails.getUsername());
        return "Ok";
    }

    @GetMapping("/manager/wait")
    public List<ProductDTO> getWaitingProducts(){
        return productService.getWaitingProducts();
    }

    @GetMapping("/manager/decided")
    public List<ProductDTO> getDecidedProducts(@AuthenticationPrincipal UserDetails userDetails){
        return productService.getDecidedProducts(userDetails.getUsername());
    }

    @GetMapping("/member/posts")
    public List<ProductDTO> getProducts(@AuthenticationPrincipal UserDetails userDetails){
        return productService.getProducts(userDetails.getUsername());
    }

    @PostMapping("/delete")
    public String deleteProduct(@RequestBody Map<String, List<Long>> requestBody, @AuthenticationPrincipal UserDetails userDetails){
        List<Long> productIds = requestBody.get("productIds");
        return productService.deleteProduct(userDetails.getUsername(), productIds);
    }

    @PatchMapping("/accept")
    public String acceptProduct(@RequestParam("id") Long id, @AuthenticationPrincipal UserDetails userDetails){
        productService.acceptProduct(id, userDetails.getUsername());
        return "OK";
    }

    @PatchMapping("/reject")
    public String rejectProduct(@RequestParam("id") Long id, @AuthenticationPrincipal UserDetails userDetails){
        productService.rejectProduct(id, userDetails.getUsername());
        return "OK";
    }

    @PatchMapping("/cancel")
    public String cancelProduct(@RequestParam("id") Long id){
        productService.cancelProduct(id);
        return "OK";
    }
}
