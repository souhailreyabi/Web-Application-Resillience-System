package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.importInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;
@Component
public class importInformationDao {
    @Autowired
    private ImportInformationRepository repository;
    public Collection<importInformation> getimportInformations() {
        return repository.findAll();
    }

    public importInformation createimportInformation(importInformation importInformation) {
        return repository.insert(importInformation);
    }

    public Optional<importInformation> getimportInformationById(int id) {
        return repository.findById(id);
    }

    public Optional<importInformation> deleteimportInformationById(int id) {
        Optional<importInformation> importInformation = repository.findById(id);
        importInformation.ifPresent(b -> repository.delete(b));
        return importInformation;
    }


}
