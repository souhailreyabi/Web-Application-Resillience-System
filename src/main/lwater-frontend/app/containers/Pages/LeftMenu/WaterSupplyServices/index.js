import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import withStyles from '@material-ui/core/styles/withStyles';
import MaterialTable from 'material-table';
import PapperBlock from '../../../../components/PapperBlock/PapperBlock';

const styles = {};

class WaterSupplyServices extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Type',
                    field: 'type',
                    lookup: {
                        'Water Supply': 'Water Supply',
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
                    type: 'Water Supply',
                    name: 'Water Supply Connection',
                    price: '4211',
                    price_per: '10',
                    price_unit: 'l',
                    date: new Date(2019, 11, 5)
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Provisional Connection',
                    price: '930',
                    price_per: '15',
                    price_unit: 'gallon',
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Collective Use Connection',
                    price: '600',
                    price_per: '1',
                    price_unit: 'm',
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Connection Transfer'
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Diameter Extension'
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Definitive Disconnection'
                },

                {
                    type: 'Water Supply',
                    name: 'Water Supply Meter Transfer'
                }

            ]
        };
    }

    render() {
        const title = brand.name + ' - Water Supply Services';
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
                    title="Water Supply Services List"
                    desc="Water Supply Services"
                    whiteBg
                >

                    <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        options={{
                            exportFileName: 'Water Supply Services List',
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

WaterSupplyServices.propTypes = {
};

export default withStyles(styles)(WaterSupplyServices);
