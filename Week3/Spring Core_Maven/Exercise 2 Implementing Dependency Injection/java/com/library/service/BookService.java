package com.library.service;

import com.library.repository.BookRepository;

import java.util.List;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String book) {
        bookRepository.save(book);
        System.out.println("Added: " + book);
    }

    public List<String> getAllBooks() {
        return bookRepository.findAll();
    }
}
