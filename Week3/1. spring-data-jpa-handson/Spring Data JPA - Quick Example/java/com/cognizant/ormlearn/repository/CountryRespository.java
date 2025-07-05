package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CountryRespository extends JpaRepository<Country,String> {
}
