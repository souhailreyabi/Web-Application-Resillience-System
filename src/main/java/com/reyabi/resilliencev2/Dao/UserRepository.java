package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository  extends MongoRepository<User,Integer> {
}
