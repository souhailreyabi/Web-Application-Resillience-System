package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Role;
import com.reyabi.resilliencev2.Model.RoleUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class RoleDao{
        @Autowired
private RoleRepository repository;
        public Collection<Role> getRoles() {
            return repository.findAll();
        }

        public Role createRole(Role Role) {
            return repository.insert(Role);
        }

        public Optional<Role> getRoleById(int id) {
            return repository.findById(id);
        }

        public Optional<Role> deleteRoleById(int id) {
            Optional<Role> role = repository.findById(id);
            role.ifPresent(b -> repository.delete(b));
            return role;
        }

        public Optional<Role> updateRoleById(int id, RoleUpdatePlayload roleUpdatePayload) {
            Optional<Role> Role = repository.findById(id);
            Role.ifPresent(b -> b.setRoleName(roleUpdatePayload.getRoleName()));

            Role.ifPresent(b -> repository.save(b));
            return Role;
        }
    
}
