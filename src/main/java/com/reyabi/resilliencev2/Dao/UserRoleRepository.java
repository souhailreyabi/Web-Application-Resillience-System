package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.UserRole;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRoleRepository extends MongoRepository<UserRole,Integer> {
}
