import Loadable from 'react-loadable';
import Loading from 'dan-components/Loading';

export const MainPage = Loadable({
    loader: () => import('./Pages/MainPage'),
    loading: Loading,
});
export const DashboardPage = Loadable({
    loader: () => import('./Pages/Dashboard'),
    loading: Loading,
});
export const Form = Loadable({
    loader: () => import('./Pages/Forms/ReduxForm'),
    loading: Loading,
});
export const Table = Loadable({
    loader: () => import('./Pages/Table/BasicTable'),
    loading: Loading,
});
export const Login = Loadable({
    loader: () => import('./Pages/Users/Login'),
    loading: Loading,
});
export const LoginDedicated = Loadable({
    loader: () => import('./Pages/Standalone/LoginDedicated'),
    loading: Loading,
});
export const Register = Loadable({
    loader: () => import('./Pages/Users/Register'),
    loading: Loading,
});
export const ResetPassword = Loadable({
    loader: () => import('./Pages/Users/ResetPassword'),
    loading: Loading,
});
export const NotFound = Loadable({
    loader: () => import('./NotFound/NotFound'),
    loading: Loading,
});
export const NotFoundDedicated = Loadable({
    loader: () => import('./Pages/Standalone/NotFoundDedicated'),
    loading: Loading,
});
export const Error = Loadable({
    loader: () => import('./Pages/Error'),
    loading: Loading,
});
export const Maintenance = Loadable({
    loader: () => import('./Pages/Maintenance'),
    loading: Loading,
});
export const ComingSoon = Loadable({
    loader: () => import('./Pages/ComingSoon'),
    loading: Loading,
});
export const Parent = Loadable({
    loader: () => import('./Parent'),
    loading: Loading,
});

export const CommercialLossesMonitoring = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring'),
    loading: Loading
});
export const CommercialDataManagement = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement'),
    loading: Loading
});
export const SubscriberProfile = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/SubscriberProfile'),
    loading: Loading
});
export const Domestic = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/SubscriberProfile/Domestic'),
    loading: Loading
});
export const IndustrialCommercial = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/SubscriberProfile/IndustrialCommercial'),
    loading: Loading
});
export const Public = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/SubscriberProfile/Public'),
    loading: Loading
});
export const MeasurementDataManagement = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement'),
    loading: Loading
});
export const BillingDataManagement = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/BillingDataManagement'),
    loading: Loading
});
export const Applications = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/Applications'),
    loading: Loading
});

export const ISIC = Loadable({
    loader: () => import('./Pages/LeftMenu/EconomicActivities/ISIC'),
    loading: Loading
});

export const NationalEconomicActivitiesClassification = Loadable({
    loader: () => import('./Pages/LeftMenu/EconomicActivities/National'),
    loading: Loading
});

export const WaterSupplyServices = Loadable({
    loader: () => import('./Pages/LeftMenu/WaterSupplyServices'),
    loading: Loading
});

export const WaterSanitationServices = Loadable({
    loader: () => import('./Pages/LeftMenu/WaterSanitationServices'),
    loading: Loading
});

export const Meters = Loadable({
    loader: () => import('./Pages/LeftMenu/Meters'),
    loading: Loading
});

export const Contracts = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/Contracts'),
    loading: Loading
});

export const LoadCommercialData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData'),
    loading: Loading
});

export const LoadCommercialDataFromExcel = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Excel'),
    loading: Loading
});

export const ConfigureExcelData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Excel/ConfigureExcelData'),
    loading: Loading
});

export const ConfigureDatabaseData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Database/ConfigureDatabaseData'),
    loading: Loading
});

export const ImportExcelData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Excel/ImportExcelData'),
    loading: Loading
});

export const LoadCommercialDataFromDatabase = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Database'),
    loading: Loading
});

export const ImportDatabaseData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/Database/ImportDatabaseData'),
    loading: Loading
});

export const LoadCommercialDataFromWebService = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/WebService'),
    loading: Loading
});

export const ImportWebServiceData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/WebService/ImportWebServiceData'),
    loading: Loading
});

export const ConfigureWebServiceData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/CommercialDataManagement/LoadCommercialData/WebService/ConfigureWebServiceData'),
    loading: Loading
});

export const MassiveDataUpload = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload'),
    loading: Loading
});

export const LoadMeteringDataFromExcel = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Excel'),
    loading: Loading
});

export const ConfigureExcelMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Excel/ConfigureExcelData'),
    loading: Loading
});

export const ImportExcelMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Excel/ImportExcelData'),
    loading: Loading
});

export const LoadMeteringDataFromDatabase = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Database'),
    loading: Loading
});

export const ConfigureDatabaseMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Database/ConfigureDatabaseData'),
    loading: Loading
});

export const ImportDatabaseMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/Database/ImportDatabaseData'),
    loading: Loading
});

export const LoadMeteringDataFromWebService = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/WebService'),
    loading: Loading
});

export const ConfigureWebServiceMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/WebService/ConfigureWebServiceData'),
    loading: Loading
});

export const ImportWebServiceMeteringData = Loadable({
    loader: () => import('./Pages/CommercialLossesMonitoring/MeteringDataManagement/MassiveDataUpload/WebService/ImportWebServiceData'),
    loading: Loading
});
