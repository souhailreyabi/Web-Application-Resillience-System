import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import { CloudUpload } from '@material-ui/icons';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import withStyles from '@material-ui/core/styles/withStyles';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    }
});

class Contracts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contractType: '',
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { contractType } = this.state;
        const title = brand.name + ' - Contracts';
        const description = brand.desc;
        const { classes } = this.props;

        const contractTypeList = [
            {
                id: 'd',
                value: 'Domestic'
            },
            {
                id: 'p',
                value: 'Public'
            },
            {
                id: 'ic',
                value: 'Industrial-Commercial'
            }
        ];

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <Card raised>
                    <CardContent>
                        <form noValidate autoComplete="off">

                            <ListItem>
                                <TextField
                                    id="app_number"
                                    label="Contract Number"
                                    value="CNT-L94"
                                    disabled
                                />
                            </ListItem>

                            <Grid container spacing={3}>

                                <Grid item xs={6} sm={3}>

                                    <List>
                                        <ListItem>
                                            <Chip label="Client" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="Client Number"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Contract type
                                                </InputLabel>
                                                <Select
                                                    name="contractType"
                                                    value={contractType}
                                                    onChange={this.onChange}
                                                >
                                                    {contractTypeList.map((obj) => (
                                                        <MenuItem
                                                            key={obj.id}
                                                            value={obj.id}
                                                        >
                                                            {obj.value + ' Contract'}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </ListItem>

                                    </List>

                                </Grid>

                                <Grid item xs={6} sm={3}>

                                    <List>
                                        <ListItem>
                                            <Chip label="Metering" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                id="meter_number"
                                                label="Number"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                id="meter_size"
                                                label="Size"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                id="meter_brand"
                                                label="Brand"
                                                fullWidth
                                            />
                                        </ListItem>

                                        <ListItem>
                                            <TextField
                                                id="meter_type"
                                                label="Type"
                                                fullWidth
                                            />
                                        </ListItem>
                                    </List>

                                </Grid>

                                <Grid item xs={6} sm={3}>

                                    <List>
                                        <ListItem>
                                            <Chip label="Attached Files" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                id="outlined-button-file-1"
                                                type="file"
                                            />
                                            <label htmlFor="outlined-button-file-1">
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    component="span"
                                                    startIcon={<CloudUpload />}
                                                >
                                                    Please Attach ... File
                                                </Button>
                                            </label>
                                        </ListItem>

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                id="outlined-button-file-2"
                                                type="file"
                                            />
                                            <label htmlFor="outlined-button-file-2">
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    component="span"
                                                    startIcon={<CloudUpload />}
                                                >
                                                    Please Attach ... File
                                                </Button>
                                            </label>
                                        </ListItem>

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                id="outlined-button-file-3"
                                                type="file"
                                            />
                                            <label htmlFor="outlined-button-file-3">
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    component="span"
                                                    startIcon={<CloudUpload />}
                                                >
                                                    Please Attach ... File
                                                </Button>
                                            </label>
                                        </ListItem>

                                    </List>

                                </Grid>

                                <Grid item xs={6} sm={3}>

                                    <List>
                                        <ListItem>
                                            <Chip label="Signature" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                id="outlined-button-file-4"
                                                type="file"
                                            />
                                            <label htmlFor="outlined-button-file-4">
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    component="span"
                                                    startIcon={<CloudUpload />}
                                                >
                                                    Please Upload Client Signature
                                                </Button>
                                            </label>
                                        </ListItem>

                                    </List>

                                </Grid>

                                <Grid item sm={3}>
                                    <ListItem>
                                        <Button className={classes.button} variant="contained" size="small">Cancel</Button>
                                        <Button
                                            size="small"
                                            variant="contained"
                                            color="primary"
                                            startIcon={<Icon>save</Icon>}
                                        >
                                            Save
                                        </Button>
                                    </ListItem>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>
                </Card>

            </div>
        );
    }
}


Contracts.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Contracts);
