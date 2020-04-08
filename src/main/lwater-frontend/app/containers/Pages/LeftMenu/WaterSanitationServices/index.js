import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import withStyles from '@material-ui/core/styles/withStyles';
import MaterialTable from 'material-table';
import PapperBlock from '../../../../components/PapperBlock/PapperBlock';

const styles = {};

class WaterSanitationServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Type',
                    field: 'type',
                    lookup: {
                        Sanitation: 'Sanitation'
                    },
                },
                {
                    title: 'Name',
                    field: 'name'
                },
                {
                    title: 'Price',
                    field: 'price',
                    type: 'currency',
                    currencySetting: {
                        currencyCode: 'MXN',
                        locale: 'es-MX'
                    }
                },
                {
                    title: 'Price Per',
                    field: 'price_per',
                    type: 'numeric'
                },
                {
                    title: 'Price Unit',
                    field: 'price_unit',
                    lookup: {
                        // Volume units
                        l: 'l',
                        gallon: 'gallon',
                        m: 'm³',
                        ft: 'ft³',
                        // Time units
                        month: 'month',
                        year: 'year'

                    }
                },
                {
                    title: 'Date',
                    field: 'date',
                    type: 'date'
                },
                {
                    title: 'Description',
                    field: 'description'
                }
            ],
            data: [
                {
                    type: 'Sanitation',
                    name: 'Sewer Connection',
                    price: '1935',
                    price_per: '100',
                    price_unit: 'ft',
                    date: new Date(2019, 8, 15)
                },
                {
                    type: 'Sanitation',
                    name: 'Sewer Provisional Connection',
                    price: '200',
                    price_per: '1',
                    price_unit: 'month',
                },
                {
                    type: 'Sanitation',
                    name: 'Sewer Collective Use Connection',
                    price: '400',
                    price_per: '3',
                    price_unit: 'month',
                },
                {
                    type: 'Sanitation',
                    name: 'Sewer Collective Connection Transfer'
                },
                {
                    type: 'Sanitation',
                    name: 'Sewer Diameter Extension'
                },
                {
                    type: 'Sanitation',
                    name: 'Sewer Definitive Disconnection'
                },
            ]
        };
    }

    render() {
        const title = brand.name + ' - Water Sanitation Services';
        const description = brand.desc;

        const { data, columns } = this.state;
        const tmpData = Array.from(data);

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <PapperBlock
                    title="Water Sanitation Services List"
                    desc="Water Sanitation Services"
                    whiteBg
                >

                    <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        options={{
                            exportFileName: 'Water Sanitation Services List',
                            filtering: true,
                            grouping: true,
                            exportButton: true,
                            pageSize: 10
                        }}
                        editable={{
                            onRowAdd: newData => new Promise((resolve) => {
                                setTimeout(() => {
                                    tmpData.push(newData);
                                    this.setState({ data: tmpData }, () => resolve());
                                    resolve();
                                }, 500);
                            }),
                            onRowUpdate: (newData, oldData) => new Promise((resolve) => {
                                setTimeout(() => {
                                    tmpData[tmpData.indexOf(oldData)] = newData;
                                    this.setState({ data: tmpData }, () => resolve());
                                    resolve();
                                }, 500);
                            }),
                            onRowDelete: oldData => new Promise((resolve) => {
                                setTimeout(() => {
                                    tmpData.splice(tmpData.indexOf(oldData), 1);
                                    this.setState({ data: tmpData }, () => resolve());
                                    resolve();
                                }, 500);
                            })
                        }}
                    />

                </PapperBlock>

            </div>
        );
    }
}

WaterSanitationServices.propTypes = {
};

export default withStyles(styles)(WaterSanitationServices);
