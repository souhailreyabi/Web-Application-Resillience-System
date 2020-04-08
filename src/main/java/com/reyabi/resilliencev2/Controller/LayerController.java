package com.reyabi.resilliencev2.Controller;

import com.reyabi.resilliencev2.Model.Layer;
import com.reyabi.resilliencev2.Model.LayerUpdatePlayload;
import com.reyabi.resilliencev2.Service.LayerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/users/layers")
public class LayerController {
    @Autowired
    private LayerService LayerService;

    @GetMapping
    public Collection<Layer> getLayers() {
        return LayerService.getLayers();
    }

    @PostMapping
    public Layer postLayer(@RequestBody Layer us) {
        return LayerService.createLayer(us);
    }

    @GetMapping(value="/{id}")
    public Optional<Layer> getLayerById(@PathVariable("id") int id) {
        return LayerService.getLayerById(id);
    }

    @DeleteMapping(value="/{id}")
    public Optional<Layer> deleteLayerById(@PathVariable("id") int id) {
        return LayerService.deleteLayerById(id);
    }

    @PutMapping(value="/{id}")
    public Optional<Layer> deleteLayerById(@PathVariable("id") int id, @RequestBody LayerUpdatePlayload
            LayerUpdatePayload) {
        return LayerService.updateLayerById(id, LayerUpdatePayload);
    }
}
