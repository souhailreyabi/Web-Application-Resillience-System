package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.UserRole;
import com.reyabi.resilliencev2.Model.UserRoleUpdatePlayload;
import com.reyabi.resilliencev2.Service.UserRoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users/roles/manager")
public class UserRoleController {
    @Autowired
    private UserRoleService userRoleService;

    @GetMapping
    public Collection<UserRole> getUserRoles() {
        return userRoleService.getUserRoles();
    }

    @PostMapping
    public UserRole postUserRole(@RequestBody UserRole us) {
        return userRoleService.createUserRole(us);
    }

    @GetMapping(value="/{id}")
    public Optional<UserRole> getUserRoleById(@PathVariable("id") int id) {
        return userRoleService.getUserRoleById(id);
    }

    @DeleteMapping(value="/{id}")
    public Optional<UserRole> deleteUserRoleById(@PathVariable("id") int id) {
        return userRoleService.deleteUserRoleById(id);
    }

    @PutMapping(value="/{id}")
    public Optional<UserRole> deleteUserRoleById(@PathVariable("id") int id, @RequestBody UserRoleUpdatePlayload
            userRoleUpdatePayload) {
        return userRoleService.updateUserRoleById(id, userRoleUpdatePayload);
    }
}
