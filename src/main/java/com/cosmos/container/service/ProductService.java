package com.cosmos.container.service;

import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.entity.ProductEntity;
import com.cosmos.container.repository.ProductRepository;
import jakarta.transaction.Transactional;
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

    @Transactional
    public String deleteProduct(String username, List<Long> productIds) {
        for(Long id : productIds) {
            productRepository.deleteByMemberIdAndId(username, id);
        }
        return "OK";
    }
}
