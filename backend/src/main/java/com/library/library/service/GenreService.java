package com.library.library.service;

import com.library.library.dto.GenreDTO;
import com.library.library.entities.Genre;
import com.library.library.repositories.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class GenreService {

    @Autowired
    private GenreRepository repository;

    @Transactional(readOnly = true)
    public List<GenreDTO> findAll(){
        List<Genre> result = repository.findAll();
        return result.stream().map(x -> new GenreDTO(x)).toList();

    }
}
