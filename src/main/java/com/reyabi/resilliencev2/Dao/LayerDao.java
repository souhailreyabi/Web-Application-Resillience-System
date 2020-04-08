package com.reyabi.resilliencev2.Dao;

import com.reyabi.resilliencev2.Model.Layer;
import com.reyabi.resilliencev2.Model.LayerUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class LayerDao {
    @Autowired
    private LayerRepository repository;
    public Collection<Layer> getLayers() {
        return repository.findAll();
    }

    public Layer createLayer(Layer Layer) {
        return repository.insert(Layer);
    }

    public Optional<Layer> getLayerById(int id) {
        return repository.findById(id);
    }

    public Optional<Layer> deleteLayerById(int id) {
        Optional<Layer> Layer = repository.findById(id);
        Layer.ifPresent(b -> repository.delete(b));
        return Layer;
    }

    public Optional<Layer> updateLayerById(int id, LayerUpdatePlayload layerUpdatePayload) {
        Optional<Layer> Layer = repository.findById(id);
        Layer.ifPresent(b -> b.setLayerDescription(layerUpdatePayload.getLayerDescription()));
        Layer.ifPresent(b -> b.setLayerSource(layerUpdatePayload.getLayerSource()));
        Layer.ifPresent(b -> b.setLayerType(layerUpdatePayload.getLayerType()));
        Layer.ifPresent(b -> b.setLayerCatalogId(layerUpdatePayload.getLayerCatalogId()));
        Layer.ifPresent(b -> b.setLayerAcquisitionDate(layerUpdatePayload.getLayerAcquisitionDate()));
        Layer.ifPresent(b -> repository.save(b));
        return Layer;
    }
}
