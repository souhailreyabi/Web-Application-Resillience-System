package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Catalog;
import com.reyabi.resilliencev2.Model.CatalogUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class CatalogDao {
    @Autowired
    private CatalogRepository repository;
    public Collection<Catalog> getCatalogs() {
        return repository.findAll();
    }

    public Catalog createCatalog(Catalog catalog) {
        return repository.insert(catalog);
    }

    public Optional<Catalog> getCatalogById(int id) {
        return repository.findById(id);
    }

    public Optional<Catalog> deleteCatalogById(int id) {
        Optional<Catalog> catalog = repository.findById(id);
        catalog.ifPresent(b -> repository.delete(b));
        return catalog;
    }

    public Optional<Catalog> updateCatalogById(int id, CatalogUpdatePlayload catalogUpdatePayload) {
        Optional<Catalog> catalog = repository.findById(id);
        catalog.ifPresent(b -> b.setCatalogName(catalogUpdatePayload.getCatalogName()));

        catalog.ifPresent(b -> repository.save(b));
        return catalog;
    }
}
