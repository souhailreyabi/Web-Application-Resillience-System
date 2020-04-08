package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.LayerDao;
import com.reyabi.resilliencev2.Model.Layer;
import com.reyabi.resilliencev2.Model.LayerUpdatePlayload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class LayerService {
    @Autowired
    private LayerDao layerDao;
    public Collection<Layer> getLayers() {
        return layerDao.getLayers();
    }

    public Layer createLayer(Layer layer) {
        return layerDao.createLayer(layer);
    }

    public Optional<Layer> getLayerById(int id) {
        return layerDao.getLayerById(id);
    }

    public Optional<Layer> deleteLayerById(int id) {
        return layerDao.deleteLayerById(id);
    }

    public Optional<Layer> updateLayerById(int id, LayerUpdatePlayload layerUpdatePayload) {
        return layerDao.updateLayerById(id, layerUpdatePayload);
    }
}
