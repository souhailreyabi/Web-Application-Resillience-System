package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.UserRoleDao;
import com.reyabi.resilliencev2.Model.UserRole;
import com.reyabi.resilliencev2.Model.UserRoleUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserRoleService {
    @Autowired
    private UserRoleDao userRoleDao;
    public Collection<UserRole> getUserRoles() {
        return userRoleDao.getUserRoles();
    }

    public UserRole createUserRole(UserRole Role) {
        return userRoleDao.createUserRole(Role);
    }

    public Optional<UserRole> getUserRoleById(int id) {
        return userRoleDao.getUserRoleById(id);
    }

    public Optional<UserRole> deleteUserRoleById(int id) {
        return userRoleDao.deleteUserRoleById(id);
    }

    public Optional<UserRole> updateUserRoleById(int id, UserRoleUpdatePlayload userRolePlayload) {
        return userRoleDao.updateUserRoleById(id, userRolePlayload);
    }

}
