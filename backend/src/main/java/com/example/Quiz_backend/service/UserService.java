package com.example.Quiz_backend.service;

import com.example.Quiz_backend.entity.Users;
import com.example.Quiz_backend.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository repo;

    @Autowired
    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public boolean registerUser(Users user) {
        if (repo.findByEmail(user.getEmail()).isPresent()) return false;
        // Save password as plain text (NOT recommended in production)
        repo.save(user);
        return true;
    }

    public boolean loginUser(String email, String rawPassword) {
        return repo.findByEmail(email)
                .map(user -> rawPassword.equals(user.getPassword()))
                .orElse(false);
    }
}
