package com.example.Quiz_backend.dto;

import java.util.List;

public class SubjectQuestionResponse {
    private String subjectName;
    private List<QuestionDTO> questions;

    // Getters and setters

    public static class QuestionDTO {
        private String questionText;
        private String correctAnswer;
        private List<String> options;

        // Getters and setters
        public String getQuestionText() { return questionText; }
        public void setQuestionText(String questionText) { this.questionText = questionText; }

        public String getCorrectAnswer() { return correctAnswer; }
        public void setCorrectAnswer(String correctAnswer) { this.correctAnswer = correctAnswer; }

        public List<String> getOptions() { return options; }
        public void setOptions(List<String> options) { this.options = options; }
    }

    public String getSubjectName() { return subjectName; }
    public void setSubjectName(String subjectName) { this.subjectName = subjectName; }

    public List<QuestionDTO> getQuestions() { return questions; }
    public void setQuestions(List<QuestionDTO> questions) { this.questions = questions; }
}
