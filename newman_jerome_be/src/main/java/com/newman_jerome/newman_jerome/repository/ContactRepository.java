package com.newman_jerome.newman_jerome.repository;

import com.newman_jerome.newman_jerome.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RestResource(exported = false)
public interface ContactRepository extends JpaRepository<Contact, Long> {
//    @Query("SELECT DISTINCT c FROM  Contact c WHERE UPPER(c.firstName) LIKE upper(?1%) AND UPPER(c.lastName) LIKE upper(?2%) ")
//    List<Contact> searchForContactsByFirstAndLastIgnoreCase(String firstName, String lastName);
    List<Contact> findByFirstNameStartsWithIgnoreCaseAndLastNameStartsWithIgnoreCase(String firstName, String lastName);

    List<Contact> findByFirstNameStartsWithIgnoreCase(String firstName);

    List<Contact> findByLastNameStartsWithIgnoreCase(String lastName);
}
