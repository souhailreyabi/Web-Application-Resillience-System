package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.User;
import com.reyabi.resilliencev2.Model.UserUpdatePlayload;
import com.reyabi.resilliencev2.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping
    public Collection<User> getUsers() {
        return userService.getUsers();
    }

    @PostMapping
    public User postUser(@RequestBody User us) {
        return userService.createUser(us);
    }

    @GetMapping(value="/{id}")
    public Optional<User> getUserById(@PathVariable("id") int id) {
        return userService.getUserById(id);
    }

    @DeleteMapping(value="/{id}")
    public Optional<User> deleteUserById(@PathVariable("id") int id) {
        return userService.deleteUserById(id);
    }

    @PutMapping(value="/{id}")
    public Optional<User> deleteUserById(@PathVariable("id") int id, @RequestBody UserUpdatePlayload
            UserUpdatePayload) {
        return userService.updateUserById(id, UserUpdatePayload);
    }


}
