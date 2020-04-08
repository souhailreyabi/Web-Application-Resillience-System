package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.User;
import com.reyabi.resilliencev2.Model.UserUpdatePlayload;
import com.reyabi.resilliencev2.Model.UserUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class UserDao {
    @Autowired
    private UserRepository repository;
    public Collection<User> getUsers() {
        return repository.findAll();
    }

    public User createUser(User User) {
        return repository.insert(User);
    }

    public Optional<User> getUserById(int id) {
        return repository.findById(id);
    }

    public Optional<User> deleteUserById(int id) {
        Optional<User> User = repository.findById(id);
        User.ifPresent(b -> repository.delete(b));
        return User;
    }

    public Optional<User> updateUserById(int id, UserUpdatePlayload UserUpdatePayload) {
        Optional<User> User = repository.findById(id);
        User.ifPresent(b -> b.setUserEmail(UserUpdatePayload.getUserEmail()));
        User.ifPresent(b -> b.setUserFirstName(UserUpdatePayload.getUserFirstName()));
        User.ifPresent(b -> b.setUserLastName(UserUpdatePayload.getUserLastName()));
        User.ifPresent(b -> b.setUserPhone(UserUpdatePayload.getUserPhone()));
        User.ifPresent(b -> b.setUserPassword(UserUpdatePayload.getUserPassword()));
        User.ifPresent(b -> repository.save(b));
        return User;
    }
}
