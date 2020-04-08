package com.reyabi.resilliencev2.Model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "importInformation")
public class importInformation {

   private int userId;
   private int layerId;
    private Date importInformationDate=new Date();

    public int getUserId() {
        return userId;
    }

    public int getLayerId() {
        return layerId;
    }

    public Date getImportInformationDate() {
        return importInformationDate;
    }
}
