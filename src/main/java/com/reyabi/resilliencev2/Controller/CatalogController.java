package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.Catalog;
import com.reyabi.resilliencev2.Model.CatalogUpdatePlayload;
import com.reyabi.resilliencev2.Service.CatalogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users/catalog")
public class    CatalogController {
    @Autowired
    private CatalogService CatalogService;

    @GetMapping
    public Collection<Catalog> getCatalogs() {
        return CatalogService.getCatalogs();
    }

    @PostMapping
    public Catalog postCatalog(@RequestBody Catalog us) {
        return CatalogService.createCatalog(us);
    }

    @GetMapping(value="/{id}")
    public Optional<Catalog> getCatalogById(@PathVariable("id") int id) {
        return CatalogService.getCatalogById(id);
    }

    @DeleteMapping(value="/{id}")
    public Optional<Catalog> deleteCatalogById(@PathVariable("id") int id) {
        return CatalogService.deleteCatalogById(id);
    }

    @PutMapping(value="/{id}")
    public Optional<Catalog> deleteCatalogById(@PathVariable("id") int id, @RequestBody CatalogUpdatePlayload
            CatalogUpdatePayload) {
        return CatalogService.updateCatalogById(id, CatalogUpdatePayload);
    }
}
