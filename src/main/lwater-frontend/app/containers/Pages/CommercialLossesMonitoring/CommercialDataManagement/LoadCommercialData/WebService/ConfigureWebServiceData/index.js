import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import PapperBlock from '../../../../../../../components/PapperBlock/PapperBlock';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    }
});

class ConfigureExcelData extends Component {
    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Configure Web Service Data';
        const description = brand.desc;

        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <PapperBlock
                    title="Configure Web Service Data For Applications"
                    desc="Specify for each field the correspondent web service key"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="App. Number Key"
                                        value="appNbr"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="ID Card Key"
                                        value="idCard"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="f_name"
                                        label="First Name Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="m_name"
                                        label="Middle Name Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="l_name"
                                        label="Last Name Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="nationality"
                                        label="Nationality Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="email"
                                        label="Email Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="mobile"
                                        label="Mobile Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="phone"
                                        label="Phone Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="profession"
                                        label="Profession Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="address"
                                        label="Address Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>

                            <List>
                                <ListItem>
                                    <Chip label="Property" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        id="propertyType"
                                        label="Property Type Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="typeDomPro"
                                        label="Domestic Property Type Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="area_dom_pro"
                                        label="Area Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="family_size_dom_pro"
                                        label="Family Size Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="number_rooms_with_supply_dom_pro"
                                        label="Supply Rooms Number Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="others_dom_pro"
                                        label="Other Rooms Number Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="name_pub_pro"
                                        label="Public Property Name Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="name_ind_com_pro"
                                        label="Industrial-Commercial Property Key"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="size_ind_com_pro"
                                        label="Industrial-Commercial Size Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>

                            <List>
                                <ListItem>
                                    <Chip label="Services" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="First Service Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Second Service Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Third Service Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Fourth Service Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                            <List>
                                <ListItem>
                                    <Chip label="Pricing" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Tariff Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>

                            <List>
                                <ListItem>
                                    <Chip label="Other" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Observations Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>
                            <ListItem>
                                <Button className={classes.button} variant="contained" size="small">Cancel</Button>
                                <Button
                                    className={classes.button}
                                    size="small"
                                    variant="contained"
                                    color="primary"
                                    startIcon={<Icon>save</Icon>}
                                >
                                    Save
                                </Button>
                                <TextField
                                    required
                                    label="Config. Profile Name"
                                    value="config-profile-1"
                                />
                            </ListItem>
                        </Grid>

                    </Grid>
                </PapperBlock>

                <PapperBlock
                    title="Configure Web Service Data For Contracts"
                    desc="Specify for each field the correspondent web service key"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="Contract Number Key"
                                        value="contrNbr"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Client Number Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Contract Type Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>

                            <List>
                                <ListItem>
                                    <Chip label="Metering" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Number Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Size Key"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Brand Key"
                                        value="G"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Type Key"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                    </Grid>

                    <Grid item sm={3}>
                        <ListItem>
                            <Button className={classes.button} variant="contained" size="small">Cancel</Button>
                            <Button
                                className={classes.button}
                                size="small"
                                variant="contained"
                                color="primary"
                                startIcon={<Icon>save</Icon>}
                            >
                                Save
                            </Button>
                            <TextField
                                required
                                label="Config. Profile Name"
                                value="config-profile-1"
                            />
                        </ListItem>
                    </Grid>
                </PapperBlock>

            </div>
        );
    }
}


ConfigureExcelData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ConfigureExcelData);
