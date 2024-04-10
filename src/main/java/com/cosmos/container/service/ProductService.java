package com.cosmos.container.service;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;

    public String saveProduct(ProductDTO productDTO) {
        ProductEntity productEntity = ProductEntity.toProductEntity(productDTO);
        productRepository.save(productEntity);
        return productDTO.toString();
    }
}
