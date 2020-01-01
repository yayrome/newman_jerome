package com.newman_jerome.newman_jerome;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import javax.annotation.PostConstruct;
import java.util.Map;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class NewmanJeromeApplication {

    public static void main(String[] args) {
        SpringApplication.run(NewmanJeromeApplication.class, args);
    }

    @PostConstruct
    public void log_jerome() {
        System.out.println("ClassLoader");
        System.out.println("**********************************************************************");
        System.out.println("**********************************************************************");
        System.out.println(System.getProperty("java.class.path").replace(':', '\n'));
        System.out.println("**********************************************************************");
        System.out.println("**********************************************************************");
    }

}
