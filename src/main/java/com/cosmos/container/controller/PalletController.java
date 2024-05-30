package com.cosmos.container.controller;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.PalletDTO;
import com.cosmos.container.dto.ProductDTO;
import com.cosmos.container.service.PalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/pallets")
@RequiredArgsConstructor
public class PalletController {
    private final PalletService palletService;

    @GetMapping("/{container-id}")
    public List<PalletDTO> getPallets(@PathVariable("container-id") Long containerId){
        return palletService.getPallets(containerId);
    }

    @GetMapping("/{container-id}/valid")
    public List<ProductDTO> getValidProducts(@PathVariable("container-id") Long containerId, @AuthenticationPrincipal UserDetails userDetails){
        return palletService.getValidProducts(containerId, userDetails.getUsername());
    }

    @PostMapping()
    public ResponseEntity<?> addPallet(@RequestParam("productId") Long productId,
                                       @RequestParam("containerId") Long containerId,
                                       @RequestParam("palletType") PalletType palletType){
        if(palletService.addPallet(productId, containerId, palletType))
            return ResponseEntity.status(HttpStatus.CREATED).build();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }

    @DeleteMapping("/{pallet-id}")
    public ResponseEntity<?> cancelPallet(@PathVariable("pallet-id") Long palletId){
        palletService.cancelPallet(palletId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @PatchMapping()
    public ResponseEntity<?> saveLocation(@RequestBody PalletDTO palletDTO){
        palletService.saveLocation(palletDTO);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
