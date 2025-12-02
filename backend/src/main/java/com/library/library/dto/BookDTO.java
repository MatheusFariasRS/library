package com.library.library.dto;

import com.library.library.entities.Book;
import com.library.library.entities.Genre;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

import java.util.ArrayList;
import java.util.List;

public class BookDTO {

    private Long id;

    @Size(min = 3, max = 80, message = "Nome precisa ter de 3 a 80 caracteres")
    @NotBlank(message = "Campo requerido")
    private String title;

    @Size(min = 10, message = "Descrição precisa ter no mínimo 10 caracteres")
    @NotBlank(message = "Campo requerido")
    private String description;

    @NotEmpty(message = "Deve ter pelo menos um genero")
    private List<GenreDTO> genres = new ArrayList<>();

    public BookDTO(){

    }

    public BookDTO(Long id, String title, String description) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    public BookDTO(Book entity) {
        id = entity.getId();
        title = entity.getTitle();
        description = entity.getDescription();
        for(Genre genre : entity.getGenres()){
            genres.add(new GenreDTO(genre));
        }
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public List<GenreDTO> getGenres() {
        return genres;
    }
}
