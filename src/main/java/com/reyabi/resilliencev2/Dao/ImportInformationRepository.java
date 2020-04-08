package com.reyabi.resilliencev2.Dao;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.reyabi.resilliencev2.Model.importInformation;

public interface ImportInformationRepository extends MongoRepository<importInformation,Integer> {

}
