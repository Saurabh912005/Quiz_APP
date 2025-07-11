package com.example.Quiz_backend.service;

import com.example.Quiz_backend.dto.SubjectQuestionResponse;
import com.example.Quiz_backend.entity.QuizQuestion;
import com.example.Quiz_backend.entity.Subject;
import com.example.Quiz_backend.repo.QuestionRepo;
import com.example.Quiz_backend.repo.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class QuestionService {

    @Autowired
    private QuestionRepo questionRepo;

    @Autowired
    private SubjectRepository subjectRepository;

    // ✅ Get all questions
    public List<QuizQuestion> getAllQuestions() {
        return questionRepo.findAll();
    }

    // ✅ Save question with subject handling
    public QuizQuestion saveQuestion(QuizQuestion question) {
        Subject subject = question.getSubject();

        if (subject != null && subject.getName() != null) {
            // Check if subject already exists by name
            Subject existingSubject = subjectRepository.findByName(subject.getName());

            if (existingSubject == null) {
                // If not found, create and save new subject
                existingSubject = subjectRepository.save(new Subject(subject.getName()));
            }

            // Assign the managed subject to the question
            question.setSubject(existingSubject);
        } else {
            throw new RuntimeException("Subject name is required.");
        }

        return questionRepo.save(question);

    }


    // ✅ Get subject with questions and options
    public SubjectQuestionResponse getSubjectWithQuestions(String subjectName) {
        Subject subject = subjectRepository.findByName(subjectName);
        if (subject == null) {
            throw new RuntimeException("Subject not found: " + subjectName);
        }

        List<QuizQuestion> questions = subject.getQuestions(); // subject.getQuestions() must be mappedBy in Subject entity
        List<SubjectQuestionResponse.QuestionDTO> questionDTOs = new ArrayList<>();

        for (QuizQuestion q : questions) {
            SubjectQuestionResponse.QuestionDTO dto = new SubjectQuestionResponse.QuestionDTO();
            dto.setQuestionText(q.getQuestionText());
            dto.setCorrectAnswer(q.getCorrectAnswer());
            dto.setOptions(q.getOptions());
            questionDTOs.add(dto);
        }

        SubjectQuestionResponse response = new SubjectQuestionResponse();
        response.setSubjectName(subject.getName());
        response.setQuestions(questionDTOs);

        return response;
    }
}
