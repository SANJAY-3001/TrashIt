package com.trashit.trashit_backend.dto;

import java.sql.Timestamp;

import com.trashit.trashit_backend.model.Category;
import com.trashit.trashit_backend.model.SolutionType;

public class SubmitWasteDTO {

    private Long id;
    private Long userId; // Reference to the User entity
    private SolutionType solutionType;
    private Category category;
    private boolean taken;
    private String address;
    private String firstName;
    private String lastName;
    private String email;
    private String phone;
    private Timestamp submittedAt;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public SolutionType getSolutionType() {
        return solutionType;
    }

    public void setSolutionType(SolutionType solutionType) {
        this.solutionType = solutionType;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public boolean isTaken() {
        return taken;
    }

    public void setTaken(boolean taken) {
        this.taken = taken;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Timestamp getSubmittedAt() {
        return submittedAt;
    }

    public void setSubmittedAt(Timestamp submittedAt) {
        this.submittedAt = submittedAt;
    }
}
