package com.library.repository;

import java.util.ArrayList;
import java.util.List;

public class BookRepository {
    private final List<String> books = new ArrayList<>();
    public void save(String book){
        books.add(book);
    }
    public List<String> findAll(){
        return books;
    }
}
