package com.newman_jerome.newman_jerome.controller;

import com.newman_jerome.newman_jerome.model.Contact;
import com.newman_jerome.newman_jerome.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/contacts")
public class ContactController {
    private ContactRepository contactRepository;

    @Autowired
    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping("/{id}")
    public Contact getOneContact(@PathVariable("id") Long id) {
        return doesContactExist(id);
    }


    @GetMapping()
    public List<Contact> getAllContacts() {
        return contactRepository.findAll();
    }


    @PostMapping()
    public Contact create(@RequestBody Contact contact) {
        return contactRepository.save(contact);
    }

    @PutMapping("/{id}")
    public Contact update(@PathVariable Long id, @RequestBody Contact contact) throws Exception {
        if (contact != null && !id.equals(contact.getId())) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Contact Ids do not match. " + id + " != " + contact.getId());
        }

        // TODO: Specs say only update lastName, email and phone. Why is firstName neglected????
        Contact existingContact = doesContactExist(id);
        contact.setId(id);
        contact.setFirstName(existingContact.getFirstName());

        return contactRepository.save(contact);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        contactRepository.deleteById(id);
    }

    private Contact doesContactExist(Long contactId) throws  ResponseStatusException{
        Optional<Contact> optionalContact = contactRepository.findById(contactId);

        if (optionalContact.isEmpty()) {
            throw new ResponseStatusException(
                    HttpStatus.NOT_FOUND, "Contact Not Found. " + contactId);
        }

        return optionalContact.get();
    }
}