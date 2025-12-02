package com.library.library.service;

import com.library.library.dto.BookDTO;
import com.library.library.dto.BookMinDTO;
import com.library.library.dto.GenreDTO;
import com.library.library.entities.Book;
import com.library.library.entities.Genre;
import com.library.library.repositories.BookRepository;
import com.library.library.repositories.GenreRepository;
import com.library.library.service.exceptions.ResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BookService {

    @Autowired
    private GenreRepository genreRepository;

    @Autowired
    private BookRepository repository;

    @Transactional(readOnly = true)
    public BookDTO findById(Long id){
        Book book = repository.findById(id).
                orElseThrow(()-> new ResourceNotFoundException("Recurso não encontrado"));
        return new BookDTO(book);
    }

    @Transactional(readOnly = true)
    public Page<BookDTO> findAll(String title, Pageable pageable){
        Page<Book> result = repository.searchByTitle(title, pageable);
        return result.map(x -> new BookDTO(x));
    }

    @Transactional
    public BookDTO insert(BookDTO dto) {
        Book entity = new Book();
        entity.setTitle(dto.getTitle());
        entity.setDescription(dto.getDescription());

        entity.getGenres().clear();
        for(GenreDTO genreDTO : dto.getGenres()){
            Genre genre = genreRepository.getReferenceById(genreDTO.getId());
            entity.getGenres().add(genre);
        }

        entity = repository.save(entity);
        return new BookDTO(entity);
    }
}
