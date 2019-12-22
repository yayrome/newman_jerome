package com.newman_jerome.newman_jerome.repository;

import com.newman_jerome.newman_jerome.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    @Query("SELECT DISTINCT c FROM  Contact c WHERE c.firstName LIKE ?1% AND c.lastName LIKE ?2% ")
    List<Contact> searchForContactsByFirstAndLast(String firstName, String lastName);

    List<Contact> findByFirstNameStartsWith(String firstName);

    List<Contact> findByLastNameStartsWith(String lastName);
}
