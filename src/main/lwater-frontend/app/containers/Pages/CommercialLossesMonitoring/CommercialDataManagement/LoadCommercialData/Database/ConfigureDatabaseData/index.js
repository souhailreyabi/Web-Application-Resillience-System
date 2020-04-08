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
import { PropTypes } from 'prop-types';
import PapperBlock from '../../../../../../../components/PapperBlock/PapperBlock';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    }
});

class DatabaseConfigureData extends Component {
    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Configure Database Data';
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
                    title="Configure Database Data for Applications"
                    desc="Specify for each field the correspondent database table & column"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="App. Number Table"
                                        value="supply_data"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="App. Number Field"
                                        value="app_code"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="ID Card Table"
                                        value="supply_data"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="ID Card Field"
                                        value="app_id_card"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="First Name Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="First Name Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Middle Name Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Middle Name Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Last Name Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Last Name Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Nationality Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Nationality Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Email Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Email Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Mobile Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Mobile Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Phone Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Phone Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Profession Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Profession Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Address Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Address Field"
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
                                        label="Property Type Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Property Type Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Dom. Prop. Type Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Dom. Prop. Type Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Area Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Area Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Family Size Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Family Size Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Sup. Rooms Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Sup. Rooms Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Ot. Rooms Nbr. Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Ot. Rooms Nbr. Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Pub. Prop. Name Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Pub. Prop. Name Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Ind. Com. Prop. Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Ind. Com. Prop. Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Ind. Com. Prop. S. Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Ind. Com. Prop. S. Field"
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
                                        label="First Service Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="First Service Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Second Service Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Second Service Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Third Service Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Third Service Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Fourth Service Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Fourth Service Field"
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
                                        label="Tariff Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Tariff Field"
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
                                        label="Observations Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Observations Field"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={6}>
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
                    title="Configure Database Data for Contracts"
                    desc="Specify for each field the correspondent database table & column"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <TextField
                                        label="Contract Number Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Contract Number Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <Chip label="Client" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Client Number Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Client Number Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Contract Type Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Contract Type Field"
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
                                        label="Number Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Number Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Size Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Size Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Brand Table"
                                        value="metering_supply"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Brand Field"
                                        value="meter_brand"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Type Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Type Field"
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


DatabaseConfigureData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatabaseConfigureData);
