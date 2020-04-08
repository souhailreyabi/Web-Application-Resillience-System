package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.CatalogDao;
import com.reyabi.resilliencev2.Model.Catalog;
import com.reyabi.resilliencev2.Model.CatalogUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;
@Service
public class CatalogService {
    @Autowired
    private CatalogDao catalogDao;
    public Collection<Catalog> getCatalogs() {
        return catalogDao.getCatalogs();
    }

    public Catalog createCatalog(Catalog catalog) {
        return catalogDao.createCatalog(catalog);
    }

    public Optional<Catalog> getCatalogById(int id) {
        return catalogDao.getCatalogById(id);
    }

    public Optional<Catalog> deleteCatalogById(int id) {
        return catalogDao.deleteCatalogById(id);
    }

    public Optional<Catalog> updateCatalogById(int id, CatalogUpdatePlayload CatalogPlayload) {
        return catalogDao.updateCatalogById(id, CatalogPlayload);
    }
}
