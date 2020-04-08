import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import getHtmlTitle from 'dan-api/dummy/getHtmlTitle';
import withStyles from '@material-ui/core/styles/withStyles';
import { PropTypes } from 'prop-types';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PapperBlock from '../../../../../components/PapperBlock/PapperBlock';

const styles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    gridSizing: {
        marginBottom: '15%'
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
});

class NationalEconomicActivitiesClassification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classification: '1',
            classificationD: '',
            columns: [
                {
                    title: 'Local Class',
                    field: 'local_class'
                },
                {
                    title: 'Local Description',
                    field: 'local_description'
                },
                {
                    title: 'ISIC Class',
                    field: 'isic_class'
                },
                {
                    title: 'ISIC Description',
                    field: 'isic_description'
                },
            ],
            data: [
                {
                    local_class: '111110',
                    isic_class: '0111',
                    local_description: 'Cultivo de soya',
                    isic_description: 'Growing of cereals (except rice), leguminous crops and oil seeds'
                },
                {
                    local_class: '111120',
                    isic_class: '0111',
                    local_description: 'Cultivo de cártamo',
                    isic_description: 'Growing of cereals (except rice), leguminous crops and oil seeds'
                },
                {
                    local_class: '111122',
                    isic_class: '0111',
                    local_description: 'Cultivo de girasol',
                    isic_description: 'Growing of cereals (except rice), leguminous crops and oil seeds'
                }
            ]
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { classes, location } = this.props;
        // TODO Generalize this on all the pages
        const title = brand.name + getHtmlTitle(location);
        const description = brand.desc;

        const {
            columns, data, classification, classificationD
        } = this.state;

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <Grid container direction="row" spacing={3}>

                    <Grid item xs={4}>

                        <PapperBlock
                            title="Add Classification"
                            icon="ios-add"
                            whiteBg
                        >
                            <ListItem>
                                <TextField
                                    label="Name"
                                    fullWidth
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    label="Description"
                                    fullWidth
                                />
                            </ListItem>

                            <ListItem>
                                <TextField
                                    type="number"
                                    label="Revision Number"
                                    fullWidth
                                />
                            </ListItem>

                            <ListItem>
                                <Button variant="contained" size="small">Cancel</Button>
                                &nbsp;
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Icon>send</Icon>}
                                >
                                    Add
                                </Button>
                            </ListItem>
                        </PapperBlock>
                    </Grid>
                    <Grid item xs={4}>
                        <PapperBlock
                            title="Load Classification"
                            icon="ios-refresh"
                            whiteBg
                        >
                            <ListItem>
                                <FormControl
                                    fullWidth
                                    className={classes.formControl}
                                >
                                    <InputLabel>
                                        Classification
                                    </InputLabel>
                                    <Select
                                        value={classification}
                                        name="classification"
                                        onChange={this.onChange}
                                    >
                                        <MenuItem value={1}>SCIAN </MenuItem>
                                        <MenuItem value={2}>NACE</MenuItem>
                                        <MenuItem value={3}>SIC</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                &nbsp;
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    endIcon={<Icon>loop</Icon>}
                                >
                                    Load
                                </Button>
                            </ListItem>
                        </PapperBlock>
                    </Grid>

                    <Grid item xs={4}>
                        <PapperBlock
                            title="Delete Classification"
                            icon="ios-trash-outline"
                            whiteBg
                        >
                            <ListItem>
                                <FormControl
                                    fullWidth
                                    className={classes.formControl}
                                >
                                    <InputLabel>
                                        Classification
                                    </InputLabel>
                                    <Select
                                        value={classificationD}
                                        name="classificationD"
                                        onChange={this.onChange}
                                    >
                                        <MenuItem value={1}>SCIAN </MenuItem>
                                        <MenuItem value={2}>NACE</MenuItem>
                                        <MenuItem value={3}>SIC</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                &nbsp;
                                <Button
                                    size="small"
                                    variant="contained"
                                    endIcon={<Icon>delete_forever</Icon>}
                                >
                                    Delete
                                </Button>
                            </ListItem>
                        </PapperBlock>
                    </Grid>
                </Grid>

                <PapperBlock
                    title="SCIAN Economic Activities List"
                    desc="Correspondence of local industrial classification code with ISIC"
                    whiteBg
                >
                    <MaterialTable
                        title=""
                        columns={columns}
                        data={data}
                        options={{
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

NationalEconomicActivitiesClassification.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withStyles(styles)(NationalEconomicActivitiesClassification);
