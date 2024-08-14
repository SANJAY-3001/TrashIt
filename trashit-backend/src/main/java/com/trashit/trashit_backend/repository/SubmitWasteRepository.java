package com.trashit.trashit_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.trashit.trashit_backend.model.SubmitWaste;

public interface SubmitWasteRepository extends JpaRepository<SubmitWaste, Long> {
}
