package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRespository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CountryService {
    @Autowired
    private CountryRespository countryRespository;
    @Transactional
    public List<Country> getAllCountries(){
        return countryRespository.findAll();
    }
}
