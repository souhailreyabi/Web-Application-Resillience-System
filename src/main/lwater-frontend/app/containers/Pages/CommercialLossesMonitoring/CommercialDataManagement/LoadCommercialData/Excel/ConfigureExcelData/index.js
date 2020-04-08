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
        const title = brand.name + ' - Configure Excel Data';
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
                    title="Configure Excel Data For Applications"
                    desc="Specify for each field the correspondent Excel column"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="App. Number Column"
                                        value="A"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="ID Card Column"
                                        value="B"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="f_name"
                                        label="First Name Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="m_name"
                                        label="Middle Name Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="l_name"
                                        label="Last Name Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="nationality"
                                        label="Nationality Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="email"
                                        label="Email Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="mobile"
                                        label="Mobile Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="phone"
                                        label="Phone Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="profession"
                                        label="Profession Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="address"
                                        label="Address Column"
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
                                        label="Property Type Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="typeDomPro"
                                        label="Domestic Property Type Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="area_dom_pro"
                                        label="Area Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="family_size_dom_pro"
                                        label="Family Size Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="number_rooms_with_supply_dom_pro"
                                        label="Supply Rooms Number Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="others_dom_pro"
                                        label="Other Rooms Number Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="name_pub_pro"
                                        label="Public Property Name Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        id="name_ind_com_pro"
                                        label="Industrial-Commercial Property Column"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        id="size_ind_com_pro"
                                        label="Industrial-Commercial Size Column"
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
                                        label="First Service Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Second Service Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Third Service Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Fourth Service Column"
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
                                        label="Tariff Column"
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
                                        label="Observations Column"
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
                                    value="conf-profile-1"
                                />
                            </ListItem>
                        </Grid>

                    </Grid>
                </PapperBlock>

                <PapperBlock
                    title="Configure Excel Data For Contracts"
                    desc="Specify for each field the correspondent Excel column"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="Contract Number Column"
                                        value="B"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Client Number Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Contract Type Column"
                                        value="F"
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
                                        label="Number Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Size Column"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Brand Column"
                                        value="G"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Type Column"

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
                                value="conf-profile-1"
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
