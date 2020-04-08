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

class ImportDatabaseData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            applicationsConfig: '1',
            contractsConfig: '1',
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Import Database Data';
        const description = brand.desc;

        const { applicationsConfig, contractsConfig } = this.state;

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
                            title="Import Database Data For Applications"
                            desc="Specify the database parameters then hit import button"
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
                                            <Chip label="Database Parameters" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="Host IP Address"

                                                fullWidth

                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Port"

                                                fullWidth

                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Name"

                                                fullWidth

                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Username"

                                                fullWidth

                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Password"

                                                fullWidth

                                            />
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
                                                    name="applicationsConfig"
                                                    value={applicationsConfig}
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
                            title="Import Database Data For Contracts"
                            desc="Specify the database parameters then hit import button"
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
                                            <Chip label="Database Parameters" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="Host IP Address"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Port"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Name"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Username"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                label="Password"
                                                fullWidth
                                            />
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

ImportDatabaseData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImportDatabaseData);
