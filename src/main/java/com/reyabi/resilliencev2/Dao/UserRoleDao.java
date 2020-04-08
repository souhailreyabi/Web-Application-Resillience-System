package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.UserRole;
import com.reyabi.resilliencev2.Model.UserRoleUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class UserRoleDao {
    @Autowired
    private UserRoleRepository repository;
    public Collection<UserRole> getUserRoles() {
        return repository.findAll();
    }

    public UserRole createUserRole(UserRole userRole) {
        return repository.insert(userRole);
    }

    public Optional<UserRole> getUserRoleById(int id) {
        return repository.findById(id);
    }

    public Optional<UserRole> deleteUserRoleById(int id) {
        Optional<UserRole> userRole = repository.findById(id);
        userRole.ifPresent(b -> repository.delete(b));
        return userRole;
    }

    public Optional<UserRole> updateUserRoleById(int id, UserRoleUpdatePlayload UserRoleUpdatePayload) {
        Optional<UserRole> userRole = repository.findById(id);
        userRole.ifPresent(b -> b.setRoleId(UserRoleUpdatePayload.getRoleId()));

        userRole.ifPresent(b -> repository.save(b));
        return userRole;
    }
}
