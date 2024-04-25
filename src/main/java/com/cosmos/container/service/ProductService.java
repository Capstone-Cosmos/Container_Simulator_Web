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
        List<ProductEntity> productEntities = productRepository.findByMemberId(username);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
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

    public void acceptProduct(Long id, String username) {
        ProductEntity productEntity = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        productEntity.setApprovalStatus("승인");
        productEntity.setManagerId(username);
        productRepository.save(productEntity);
    }

    public void rejectProduct(Long id, String username) {
        ProductEntity productEntity = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        productEntity.setApprovalStatus("반려");
        productEntity.setManagerId(username);
        productRepository.save(productEntity);
    }

    public void cancelProduct(Long id) {
        ProductEntity productEntity =  productRepository.findByid(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 상품입니다"));
        productEntity.setApprovalStatus("승인대기");
        productRepository.save(productEntity);
    }

    public List<ProductDTO> getWaitingProducts() {
        List<ProductEntity> productEntities = productRepository.findByApprovalStatus("승인대기");
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }

    public List<ProductDTO> getDecidedProducts(String username) {
        List<ProductEntity> productEntities = productRepository.findByApprovalStatusAndManagerId("승인", username);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }

    public void assignProduct(long id, long containerId, String username) {
        ProductEntity productEntity =  productRepository.findByidAndManagerId(id, username)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 상품입니다"));
        productEntity.setContainerId(containerId);
        productEntity.setManagerId(username);
        productRepository.save(productEntity);
    }
}
