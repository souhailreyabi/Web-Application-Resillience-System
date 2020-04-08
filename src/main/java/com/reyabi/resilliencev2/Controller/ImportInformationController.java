package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.importInformation;
import com.reyabi.resilliencev2.Service.importInformationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;
import com.reyabi.resilliencev2.Service.importInformationService;

@RestController
@RequestMapping("/users/importInformations/importinformation")
public class ImportInformationController {
    
        @Autowired
        private importInformationService service;

        @GetMapping
        public Collection<importInformation> getimportInformations() {
            return service.getimportInformation();
        }

        @PostMapping
        public importInformation postimportInformation(@RequestBody importInformation us) {
            return service.createimportInformation(us);
        }

        @GetMapping(value="/{id}")
        public Optional<importInformation> getimportInformationById(@PathVariable("id") int id) {
            return service.getimportInformationById(id);
        }

        @DeleteMapping(value="/{id}")
        public Optional<importInformation> deleteimportInformationById(@PathVariable("id") int id) {
            return service.deleteimportInformationById(id);
        }


}
