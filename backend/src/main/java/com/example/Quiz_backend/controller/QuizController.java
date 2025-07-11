package com.example.Quiz_backend.controller;

import com.example.Quiz_backend.dto.SubjectQuestionResponse;
import com.example.Quiz_backend.entity.QuizQuestion;
import com.example.Quiz_backend.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class QuizController {

    @Autowired
    private QuestionService questionService;

    // Get all questions
    @GetMapping("/questions")
    public List<QuizQuestion> getAllQuestions() {
        return questionService.getAllQuestions();
    }

    // Save a new question
    @PostMapping(value = "/save", consumes = "application/json", produces = "application/json")
    public QuizQuestion saveQuestion(@RequestBody QuizQuestion question) {
        return questionService.saveQuestion(question);
    }

    // Get questions by subject
    @GetMapping("/subjects/{name}")
    public SubjectQuestionResponse getSubjectWithQuestions(@PathVariable String name) {
        return questionService.getSubjectWithQuestions(name);
    }
}
