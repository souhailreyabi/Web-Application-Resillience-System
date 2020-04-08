import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { AttachFile } from '@material-ui/icons';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import PapperBlock from '../../../../../../../components/PapperBlock/PapperBlock';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    }
});

class ImportExcelData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractsConfig: '1',
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Import Excel Metering Data';
        const description = brand.desc;

        const { contractsConfig } = this.state;

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>


                <PapperBlock
                    title="Import Excel Metering Data"
                    desc="Specify the Excel file then hit import button"
                    icon="ios-cloud-upload-outline"
                    whiteBg
                >
                    <Grid
                        container
                        alignContent="center"
                        direction="column"
                    >

                        <Grid item sm={8}>

                            <List>

                                <ListItem>
                                    <Chip label="File" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <input
                                        style={{ display: 'none' }}
                                        accept=".xlsx"
                                        id="outlined-button-file-2"
                                        type="file"
                                    />
                                    <label htmlFor="outlined-button-file-2">
                                        <Button
                                            fullWidth
                                            variant="outlined"
                                            component="span"
                                            startIcon={<AttachFile />}
                                        >
                                            Please Select The Excel File
                                        </Button>
                                    </label>
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={8}>
                            <List>

                                <ListItem>
                                    <Chip label="Configuration Profile" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <FormControl
                                        fullWidth
                                    >
                                        <InputLabel>
                                            Configuration
                                        </InputLabel>
                                        <Select
                                            name="contractsConfig"
                                            value={contractsConfig}
                                            onChange={this.onChange}
                                        >
                                            <MenuItem value={1}>CONT-DB847-CONF-1</MenuItem>
                                            <MenuItem value={2}>CONT-DB697-CONF-3</MenuItem>
                                            <MenuItem value={3}>CONT-DB112-CONF-5</MenuItem>
                                        </Select>
                                    </FormControl>
                                </ListItem>
                            </List>
                        </Grid>

                        <Grid item sm={8}>
                            <ListItem>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    size="small"
                                >Cancel
                                </Button>
                                <Button
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Icon>input</Icon>}
                                >
                                    Import
                                </Button>
                            </ListItem>
                        </Grid>

                    </Grid>
                </PapperBlock>

            </div>
        );
    }
}

ImportExcelData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImportExcelData);
