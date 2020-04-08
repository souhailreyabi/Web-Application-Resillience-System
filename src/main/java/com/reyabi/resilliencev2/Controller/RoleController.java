package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.Role;
import com.reyabi.resilliencev2.Model.RoleUpdatePlayload;
import com.reyabi.resilliencev2.Service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users/roles")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @GetMapping
    public Collection<Role> getRoles() {
        return roleService.getRoles();
    }

    @PostMapping
    public Role postRole(@RequestBody Role us) {
        return roleService.createRole(us);
    }

    @GetMapping(value="/{id}")
    public Optional<Role> getRoleById(@PathVariable("id") int id) {
        return roleService.getRoleById(id);
    }

    @DeleteMapping(value="/{id}")
    public Optional<Role> deleteRoleById(@PathVariable("id") int id) {
        return roleService.deleteRoleById(id);
    }

    @PutMapping(value="/{id}")
    public Optional<Role> deleteRoleById(@PathVariable("id") int id, @RequestBody RoleUpdatePlayload
            roleUpdatePayload) {
        return roleService.updateRoleById(id, roleUpdatePayload);
    }

}
