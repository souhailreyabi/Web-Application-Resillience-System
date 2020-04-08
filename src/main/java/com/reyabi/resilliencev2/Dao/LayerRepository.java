package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Layer;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LayerRepository extends MongoRepository<Layer,Integer> {
}
