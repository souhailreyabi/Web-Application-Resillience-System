package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Catalog;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CatalogRepository extends MongoRepository<Catalog,Integer> {
}
