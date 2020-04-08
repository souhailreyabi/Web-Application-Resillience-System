package com.reyabi.resilliencev2.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.File;
import java.util.Date;

@Document(collection = "Layer")
public class Layer {
    @Id
    private int layerId;
    private String layerName;
    private String layerSource;
    private Date layerAcquisitionDate;
    private String layerType;
    private int layerCatalogId;
    private String layerDescription;
    private File layerData;

    public int getLayerId() {
        return layerId;
    }

    public void setLayerId(int layerId) {
        this.layerId = layerId;
    }

    public String getLayerName() {
        return layerName;
    }

    public void setLayerName(String layerName) {
        this.layerName = layerName;
    }

    public String getLayerSource() {
        return layerSource;
    }

    public void setLayerSource(String layerSource) {
        this.layerSource = layerSource;
    }

    public Date getLayerAcquisitionDate() {
        return layerAcquisitionDate;
    }

    public void setLayerAcquisitionDate(Date layerAcquisitionDate) {
        this.layerAcquisitionDate = layerAcquisitionDate;
    }

    public String getLayerType() {
        return layerType;
    }

    public void setLayerType(String layerType) {
        this.layerType = layerType;
    }

    public int getLayerCatalogId() {
        return layerCatalogId;
    }

    public void setLayerCatalogId(int layerCatalogId) {
        this.layerCatalogId = layerCatalogId;
    }

    public String getLayerDescription() {
        return layerDescription;
    }

    public void setLayerDescription(String layerDescription) {
        this.layerDescription = layerDescription;
    }

    public File getLayerData() {
        return layerData;
    }

    public void setLayerData(File layerData) {
        this.layerData = layerData;
    }
}
