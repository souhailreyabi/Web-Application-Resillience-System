import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../Templates/Dashboard';
import {
    Applications,
    BillingDataManagement,
    CommercialDataManagement,
    CommercialLossesMonitoring,
    ConfigureDatabaseData,
    ConfigureDatabaseMeteringData,
    ConfigureExcelData,
    ConfigureExcelMeteringData,
    ConfigureWebServiceData,
    ConfigureWebServiceMeteringData,
    Contracts,
    DashboardPage,
    Domestic,
    Error,
    Form,
    ImportDatabaseData,
    ImportDatabaseMeteringData,
    ImportExcelData,
    ImportExcelMeteringData,
    ImportWebServiceData,
    ImportWebServiceMeteringData,
    IndustrialCommercial,
    ISIC,
    LoadCommercialData,
    LoadCommercialDataFromDatabase,
    LoadCommercialDataFromExcel,
    LoadCommercialDataFromWebService,
    LoadMeteringDataFromDatabase,
    LoadMeteringDataFromExcel,
    LoadMeteringDataFromWebService,
    MainPage,
    MassiveDataUpload,
    MeasurementDataManagement,
    Meters,
    NationalEconomicActivitiesClassification,
    NotFound,
    Parent,
    Public,
    SubscriberProfile,
    Table,
    WaterSanitationServices,
    WaterSupplyServices
} from '../pageListAsync';

class Application extends React.Component {
    render() {
        const { changeMode, history } = this.props;
        return (
            <Dashboard history={history} changeMode={changeMode}>
                <Switch>
                    <Route exact path="/app" component={MainPage} />
                    <Route exact path="/app/dashboard" component={DashboardPage} />
                    <Route exact path="/app/form" component={Form} />
                    <Route exact path="/app/table" component={Table} />
                    <Route exact path="/app/page-list" component={Parent} />
                    <Route exact path="/app/pages/not-found" component={NotFound} />
                    <Route exact path="/app/pages/error" component={Error} />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-excel/configure-excel-data"
                        component={ConfigureExcelData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-excel/import-excel-data"
                        component={ImportExcelData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-database/configure-database-data"
                        component={ConfigureDatabaseData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-database/import-database-data"
                        component={ImportDatabaseData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-web-service/configure-web-service-data"
                        component={ConfigureWebServiceData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-web-service/import-web-service-data"
                        component={ImportWebServiceData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-web-service"
                        component={LoadCommercialDataFromWebService}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-excel"
                        component={LoadCommercialDataFromExcel}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-database"
                        component={LoadCommercialDataFromDatabase}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/applications"
                        component={Applications}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/contracts"
                        component={Contracts}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data"
                        component={LoadCommercialData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/commercial-data-management"
                        component={CommercialDataManagement}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/subscriber-profile/domestic"
                        component={Domestic}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/subscriber-profile/industrial-commercial"
                        component={IndustrialCommercial}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/subscriber-profile/public"
                        component={Public}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/subscriber-profile"
                        component={SubscriberProfile}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-database"
                        component={LoadMeteringDataFromDatabase}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-web-service"
                        component={LoadMeteringDataFromWebService}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-excel/import-excel-data"
                        component={ImportExcelMeteringData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-excel/configure-excel-data"
                        component={ConfigureExcelMeteringData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-web-service/import-web-service-data"
                        component={ImportWebServiceMeteringData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-web-service/configure-web-service-data"
                        component={ConfigureWebServiceMeteringData}
                    />


                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-database/import-database-data"
                        component={ImportDatabaseMeteringData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-database/configure-database-data"
                        component={ConfigureDatabaseMeteringData}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload/load-metering-data-from-excel"
                        component={LoadMeteringDataFromExcel}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload"
                        component={MassiveDataUpload}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/metering-data-management"
                        component={MeasurementDataManagement}
                    />

                    <Route
                        exact
                        path="/app/commercial-losses-monitoring/billing-data-management"
                        component={BillingDataManagement}
                    />

                    <Route exact path="/app/commercial-losses-monitoring" component={CommercialLossesMonitoring} />

                    <Route
                        exact
                        path="/app/data/economic-activities/international-standard-industrial-classification"
                        component={ISIC}
                    />

                    <Route
                        exact
                        path="/app/data/economic-activities/national-economic-activities-classification"
                        component={NationalEconomicActivitiesClassification}
                    />

                    <Route exact path="/app/data/water-supply-services" component={WaterSupplyServices} />

                    <Route exact path="/app/data/water-sanitation-services" component={WaterSanitationServices} />

                    <Route exact path="/app/data/meters" component={Meters} />

                    <Route component={NotFound} />

                </Switch>
            </Dashboard>
        );
    }
}

Application.propTypes = {
    changeMode: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default Application;
