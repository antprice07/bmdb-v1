package com.bmdb.db;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bmdb.business.Credit;
import com.bmdb.business.Movie;

public interface CreditRepository extends JpaRepository<Credit, Integer> {

}
