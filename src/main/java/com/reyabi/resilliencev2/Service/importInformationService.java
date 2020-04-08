package com.reyabi.resilliencev2.Service;

import com.reyabi.resilliencev2.Dao.importInformationDao;
import com.reyabi.resilliencev2.Model.importInformation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
public class importInformationService {
    @Autowired
    private importInformationDao imDao;
    public Collection<importInformation> getimportInformation() {
        return imDao.getimportInformations();
    }

    public importInformation createimportInformation(importInformation importInformation) {
        return imDao.createimportInformation(importInformation);
    }

    public Optional<importInformation> getimportInformationById(int id) {
        return imDao.getimportInformationById(id);
    }

    public Optional<importInformation> deleteimportInformationById(int id) {
        return imDao.deleteimportInformationById(id);
    }


}
