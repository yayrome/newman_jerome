package com.newman_jerome.newman_jerome.repository;

import com.newman_jerome.newman_jerome.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
}
