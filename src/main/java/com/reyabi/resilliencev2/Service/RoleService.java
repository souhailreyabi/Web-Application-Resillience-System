package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.RoleDao;
import com.reyabi.resilliencev2.Model.Role;
import com.reyabi.resilliencev2.Model.RoleUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service

public class RoleService {
    @Autowired
    private RoleDao roleDao;
    public Collection<Role> getRoles() {
        return roleDao.getRoles();
    }

    public Role createRole(Role Role) {
        return roleDao.createRole(Role);
    }

    public Optional<Role> getRoleById(int id) {
        return roleDao.getRoleById(id);
    }

    public Optional<Role> deleteRoleById(int id) {
        return roleDao.deleteRoleById(id);
    }

    public Optional<Role> updateRoleById(int id, RoleUpdatePlayload RoleUpdatePayload) {
        return roleDao.updateRoleById(id, RoleUpdatePayload);
    }

}
