import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import withStyles from '@material-ui/core/styles/withStyles';
import { PropTypes } from 'prop-types';
import MaterialTable from 'material-table';
import PapperBlock from '../../../../../components/PapperBlock/PapperBlock';

const styles = {
    gridSizing: {
        marginBottom: '15%'
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
};

class EconomicActivities extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Section',
                    field: 'section'
                },
                {
                    title: 'Division',
                    field: 'division'
                },
                {
                    title: 'Group',
                    field: 'group'
                },
                {
                    title: 'Class',
                    field: 'class'
                },
                {
                    title: 'Description',
                    field: 'description'
                }

            ],
            data: [
                {
                    id: 1,
                    section: 'Section A',
                    description: 'Agriculture, forestry and fishing'
                },
                {
                    id: 2,
                    division: 'Division 01',
                    description: 'Crop and animal production, hunting and related service activities',
                    parentId: 1
                },
                {
                    id: 3,
                    group: '011',
                    description: 'Growing of non-perennial crops',
                    parentId: 2
                },
                {
                    id: 4,
                    class: '0111',
                    description: 'Growing of cereals (except rice), leguminous crops and oil seeds',
                    parentId: 3
                },
                {
                    id: 5,
                    class: '0112',
                    description: 'Growing of rice',
                    parentId: 3
                },
                {
                    id: 6,
                    class: '0113',
                    description: 'Growing of vegetables and melons, roots and tubers',
                    parentId: 3
                },
                {
                    id: 7,
                    group: '012',
                    description: 'Growing of perennial crops',
                    parentId: 2
                },
                {
                    id: 8,
                    class: '0121',
                    description: 'Growing of grapes',
                    parentId: 7
                },
                {
                    id: 9,
                    class: '0122',
                    description: 'Growing of tropical and subtropical fruits',
                    parentId: 7
                },
                {
                    id: 10,
                    section: 'Section B',
                    description: 'Mining and quarrying'
                },
                {
                    id: 11,
                    division: 'Division 05',
                    description: 'Mining of coal and lignite',
                    parentId: 10
                },
            ]
        };
    }

    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Economic Activities';
        const description = brand.desc;

        const { columns, data } = this.state;

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <PapperBlock
                    title="ISIC Economic Activities List"
                    desc="International Standard Industrial Classification of All Economic Activities"
                    whiteBg
                >

                    <MaterialTable
                        title=""
                        columns={columns}
                        parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                        data={data}
                        options={{
                            exportFileName: 'ISIC Economic Activities List',
                            filtering: true,
                            draggable: false,
                            exportButton: true,
                            pageSize: 10
                        }}
                    />

                </PapperBlock>

            </div>
        );
    }
}

EconomicActivities.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EconomicActivities);
