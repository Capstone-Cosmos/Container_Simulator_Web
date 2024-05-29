package com.cosmos.container.service;

import com.cosmos.container.constant.ApprovalStatus;
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

    public void saveProduct(ProductDTO productDTO, String username) {
        ProductEntity productEntity = new ProductEntity();
        productEntity.initProductEntity(username, productDTO);
        productRepository.save(productEntity);
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
    public void deleteProduct(String username, List<Long> productIds) {
        for(long id : productIds) {
            productRepository.deleteByMemberIdAndId(username, id);
        }
    }

    public void acceptProduct(long id, String username) {
        ProductEntity productEntity = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        productEntity.setApprovalStatus(ApprovalStatus.STATUS_ACCEPT, username);
        productRepository.save(productEntity);
    }

    public void rejectProduct(long id, String username) {
        ProductEntity productEntity = productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않는 상품입니다"));
        productEntity.setApprovalStatus(ApprovalStatus.STATUS_REJECT, username);
        productRepository.save(productEntity);
    }

    public void cancelProduct(long id) {
        ProductEntity productEntity =  productRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("유효하지 않은 상품입니다"));
        productEntity.setApprovalStatus(ApprovalStatus.STATUS_WAITING, null);
        productRepository.save(productEntity);
    }

    public List<ProductDTO> getWaitingProducts() {
        List<ProductEntity> productEntities = productRepository.findByApprovalStatus(ApprovalStatus.STATUS_WAITING);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }

    public List<ProductDTO> getDecidedProducts(String username) {
        List<ProductEntity> productEntities = productRepository.findByApprovalStatusAndManagerIdAndAssigned(ApprovalStatus.STATUS_ACCEPT, username, false);
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(ProductEntity productEntity : productEntities) {
            productDTOS.add(ProductDTO.toProductDTO(productEntity));
        }
        return productDTOS;
    }
}
