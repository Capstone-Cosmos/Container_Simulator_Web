package com.cosmos.container.controller;

import com.cosmos.container.constant.PalletType;
import com.cosmos.container.dto.PalletDTO;
import com.cosmos.container.service.PalletService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

    @PostMapping()
    public ResponseEntity<?> addPallet(@RequestParam("productId") Long productId,
                                       @RequestParam("containerId") Long containerId,
                                       @RequestParam("palletType") PalletType palletType){
        PalletDTO palletDTO = palletService.addPallet(productId, containerId, palletType);
        return ResponseEntity.status(HttpStatus.CREATED).body(palletDTO);
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
