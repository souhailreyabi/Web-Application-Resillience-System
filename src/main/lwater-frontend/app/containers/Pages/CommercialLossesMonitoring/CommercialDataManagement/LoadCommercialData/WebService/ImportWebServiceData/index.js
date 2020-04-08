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
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import PapperBlock from '../../../../../../../components/PapperBlock/PapperBlock';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    }
});

class ImportWebServiceData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appDataResponse: 1,
            appRequestMethod: 1,
            appConfig: 1,

            conDataResponse: 1,
            conRequestMethod: 1,
            conConfig: 1,
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Import Web Service Data';
        const description = brand.desc;

        const {
            appDataResponse,
            appRequestMethod,
            appConfig,
            conDataResponse,
            conRequestMethod,
            conConfig,
        } = this.state;


        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>

                        <PapperBlock
                            title="Import Web Service Data For Applications"
                            desc="Specify the web service parameters then hit import button"
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
                                            <Chip label="Parameters" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="API Url"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Data Response
                                                </InputLabel>
                                                <Select
                                                    name="appDataResponse"
                                                    value={appDataResponse}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value={1}>JSON</MenuItem>
                                                    <MenuItem value={2}>XML</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Request Method
                                                </InputLabel>
                                                <Select
                                                    name="appRequestMethod"
                                                    value={appRequestMethod}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value={1}>GET</MenuItem>
                                                    <MenuItem value={2}>POST</MenuItem>
                                                    <MenuItem value={3}>CONNECT</MenuItem>
                                                </Select>
                                            </FormControl>
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
                                                    name="appConfig"
                                                    value={appConfig}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value={1}>APPL-DB847-CONF-1</MenuItem>
                                                    <MenuItem value={2}>APPL-DB987-CONF-2</MenuItem>
                                                    <MenuItem value={3}>APPL-DB936-CONF-3</MenuItem>
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
                                        >
                                            Cancel
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

                    </Grid>

                    <Grid item xs={12} sm={6}>

                        <PapperBlock
                            title="Import Web Service Data For Contracts"
                            desc="Specify the web service parameters then hit import button"
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
                                            <Chip label="Parameters" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="API Url"
                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Data Response
                                                </InputLabel>
                                                <Select
                                                    name="conDataResponse"
                                                    value={conDataResponse}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value={1}>JSON</MenuItem>
                                                    <MenuItem value={2}>XML</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ListItem>
                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Request Method
                                                </InputLabel>
                                                <Select
                                                    name="conDataResponse"
                                                    value={conRequestMethod}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value={1}>GET</MenuItem>
                                                    <MenuItem value={2}>POST</MenuItem>
                                                    <MenuItem value={3}>CONNECT</MenuItem>
                                                </Select>
                                            </FormControl>
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
                                                    name="conConfig"
                                                    value={conConfig}
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
                                        >
                                            Cancel
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

                    </Grid>
                </Grid>

            </div>
        );
    }
}

ImportWebServiceData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImportWebServiceData);
