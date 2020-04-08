import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import withStyles from '@material-ui/core/styles/withStyles';
import MaterialTable from 'material-table';
import PapperBlock from '../../../../components/PapperBlock/PapperBlock';

const styles = {};

class Meters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Code',
                    field: 'code',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Brand',
                    field: 'brand',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Model',
                    field: 'model',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Type',
                    field: 'type',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'RM',
                    field: 'rm',
                    type: 'boolean'
                },
                {
                    title: 'Diameter',
                    field: 'diameter',
                    type: 'numeric',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Diameter Unit',
                    field: 'diameter_unit',
                    lookup: {
                        inch: 'inch',
                        mm: 'mm',
                        cm: 'cm'
                    },
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Max Flow',
                    field: 'max_flow',
                    type: 'numeric',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Flow Unit',
                    field: 'flow_unit',
                    lookup: {
                        gpm: 'gpm',
                        mc_per_hour: 'm³/h'
                    },
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Max Pressure',
                    field: 'max_pressure',
                    type: 'numeric',
                    cellStyle: {
                        width: 140
                    }
                },
                {
                    title: 'Pressure Unit',
                    field: 'pressure_unit',
                    lookup: {
                        psi: 'psi',
                        bar: 'bar'
                    },
                    cellStyle: {
                        width: 140
                    }
                }
            ],
            data: [
                {
                    code: '36816874',
                    brand: 'Badger Meter',
                    type: 'Turbine',
                    model: 'Badger Recordall',
                    rm: true,
                    diameter: 2,
                    diameter_unit: 'inch',
                    max_flow: 170,
                    flow_unit: 'gpm',
                    max_pressure: 150,
                    pressure_unit: 'psi'
                },
                {
                    code: '21036518',
                    brand: 'Honeywell',
                    type: 'Electronic',
                    model: 'Elster evoQ4',
                    rm: false,
                    diameter: 50,
                    diameter_unit: 'mm',
                    max_flow: 50,
                    flow_unit: 'mc_per_hour',
                    max_pressure: 16,
                    pressure_unit: 'bar'
                },
            ]
        };
    }

    render() {
        const title = brand.name + ' - Meters';
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
                    title="Water Meters List"
                    desc="Meter Devices Details & Types"
                    whiteBg
                >

                    <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        options={{
                            exportFileName: 'Water Meters List',
                            filtering: true,
                            sorting: false,
                            exportButton: true,
                            grouping: true,
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

Meters.propTypes = {
};

export default withStyles(styles)(Meters);
