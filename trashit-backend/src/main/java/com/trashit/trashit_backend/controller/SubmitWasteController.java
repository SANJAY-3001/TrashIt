package com.trashit.trashit_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.trashit.trashit_backend.dto.SubmitWasteDTO;
import com.trashit.trashit_backend.model.SubmitWaste;
import com.trashit.trashit_backend.service.SubmitWasteService;

@RestController
@RequestMapping("/api/waste")
public class SubmitWasteController {

    @Autowired
    private SubmitWasteService submitWasteService;

    @PostMapping("/submit")
    public ResponseEntity<SubmitWaste> submitWaste(@RequestBody SubmitWasteDTO submitWasteDTO) {
        SubmitWaste submitWaste = submitWasteService.submitWaste(submitWasteDTO);
        return ResponseEntity.ok(submitWaste);
    }
}
