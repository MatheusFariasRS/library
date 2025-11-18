package com.library.library.dto;

import com.library.library.entities.Book;

public class BookMinDTO {

    private Long id;
    private String title;

    public BookMinDTO(){

    }

    public BookMinDTO(Long id, String title) {
        this.id = id;
        this.title = title;
    }

    public BookMinDTO(Book entity) {
        id = entity.getId();
        title = entity.getTitle();
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }
}
