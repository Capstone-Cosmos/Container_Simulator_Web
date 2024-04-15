package com.cosmos.container.service;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public String saveProduct(ProductDTO productDTO) {
        ProductEntity productEntity = ProductEntity.toProductEntity(productDTO);
        productRepository.save(productEntity);
        return productDTO.toString();
    }

    public List<ProductDTO> getProducts(String username) {
        List<ProductEntity> productEntities = productRepository.findAll();
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            if(username.equals(productEntity.getMemberId())){
                productDTOS.add(ProductDTO.toProductDTO(productEntity));
            }
        }
        return productDTOS;
    }
}
