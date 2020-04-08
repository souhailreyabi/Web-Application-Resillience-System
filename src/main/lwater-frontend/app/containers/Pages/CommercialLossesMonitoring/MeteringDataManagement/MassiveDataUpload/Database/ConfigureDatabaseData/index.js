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
                    title="Configure Database Metering Data"
                    desc="Specify for each field the correspondent database table & column"
                    icon="ios-construct-outline"
                    whiteBg
                >
                    <Grid container spacing={3}>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <Chip label="Meter" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Meter Number Table"
                                        value="meter"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Meter Number Field"
                                        value="meter_nbr"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Is Meter Inside Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Is Meter Inside Field"
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
                                        label="Metering Value Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Metering Value Field"
                                        fullWidth
                                    />
                                </ListItem>
                                <ListItem>
                                    <TextField
                                        label="Reading Timestamp Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Reading Timestamp Field"
                                        fullWidth
                                    />
                                </ListItem>

                            </List>

                        </Grid>

                        <Grid item sm={3}>

                            <List>

                                <ListItem>
                                    <Chip label="Attached Files" color="primary" />
                                </ListItem>

                                <Divider variant="middle" />

                                <ListItem>
                                    <TextField
                                        label="Picture N°1 Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Picture N°1 Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Picture N°2 Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Picture N°2 Field"
                                        fullWidth
                                    />
                                </ListItem>

                                <ListItem>
                                    <TextField
                                        label="Picture N°3 Table"
                                        fullWidth
                                    />
                                    &nbsp;
                                    <TextField
                                        label="Picture N°3 Field"
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

            </div>
        );
    }
}


DatabaseConfigureData.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DatabaseConfigureData);
