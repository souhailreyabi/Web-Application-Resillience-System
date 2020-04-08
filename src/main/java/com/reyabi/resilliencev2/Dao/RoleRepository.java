package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role,Integer> {
}
