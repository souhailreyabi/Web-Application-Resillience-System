package com.reyabi.resilliencev2.Model;

import java.util.Date;

public class LayerUpdatePlayload {
    private String layerSource;
    private Date layerAcquisitionDate;
    private String layerType;
    private int layerCatalogId;
    private String layerDescription;

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
}
