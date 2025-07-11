package com.example.Quiz_backend.controller;

import com.example.Quiz_backend.entity.Users;
import com.example.Quiz_backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "${frontend.url}", allowCredentials = "true")
public class AuthController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users user) {
        boolean success = userService.registerUser(user);
        if (success) {
            return ResponseEntity.ok("User registered");
        } else {
            return ResponseEntity.badRequest().body("Email already exists");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Users loginData) {
        boolean success = userService.loginUser(loginData.getEmail(), loginData.getPassword());
        if (success) {
            return ResponseEntity.ok("Login successful");
        } else {
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
}
