package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.UserDao;
import com.reyabi.resilliencev2.Model.User;
import com.reyabi.resilliencev2.Model.UserUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserDao userdao;

    public Collection<User> getUsers() {
        return userdao.getUsers();
    }

    public User createUser(User User) {
        return userdao.createUser(User);
    }

    public Optional<User> getUserById(int id) {
        return userdao.getUserById(id);
    }

    public Optional<User> deleteUserById(int id) {
        return userdao.deleteUserById(id);
    }

    public Optional<User> updateUserById(int id, UserUpdatePlayload UserUpdatePayload) {
        return userdao.updateUserById(id, UserUpdatePayload);
    }
}
