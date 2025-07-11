package com.example.Quiz_backend.repo;

import com.example.Quiz_backend.entity.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectRepository extends JpaRepository<Subject, Long> {
     Subject findByName(String name); // Optional, for lookup by subject name
}
