package com.library;

import com.library.service.BookService;
import com.library.repository.BookRepository;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class LibraryApp {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService service = context.getBean("bookService", BookService.class);
        BookRepository repository = context.getBean("bookRepository", BookRepository.class);
        service.setBookRepository(repository);
        service.addBook("Clean Code");
        service.addBook("Effective Java");
        System.out.println("All Books: " + service.getAllBooks());
    }
}
