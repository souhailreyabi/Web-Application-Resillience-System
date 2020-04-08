import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import { CloudUpload } from '@material-ui/icons';
import PropTypes from 'prop-types';
import CountrySelect from '../../../../../components/Selects/CountrySelect';

const styles = theme => ({
    button: {
        marginRight: theme.spacing(1),
    },
    selectHeight: {
        height: 8
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
});

class Applications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            propertyType: 'd',
            typeDomPro: '',
            tariff: '1',
        };
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Applications';
        const description = brand.desc;
        const {
            propertyType, labelWidth, typeDomPro, tariff
        } = this.state;

        const propertyTypeList = [
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
        const domesticPropertyTypeList = [
            {
                id: 'dh',
                value: 'Detached House'
            },
            {
                id: 'sdh',
                value: 'Semi Detached House'
            },
            {
                id: 'f',
                value: 'Flat'
            },
            {
                id: 'a',
                value: 'Apartment'
            },
            {
                id: 'th',
                value: 'Terraced House'
            },
            {
                id: 'o',
                value: 'Other'
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
                                    label="Application Number"
                                    value="APP-W687"
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
                                                id="id_card"
                                                label="ID Card"
                                                fullWidth

                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="f_name"
                                                label="First Name"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="m_name"
                                                label="Middle Name"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="l_name"
                                                label="Last Name"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <CountrySelect id="nationality" title="Nationality" />
                                        </ListItem>
                                        <ListItem>
                                            <TextField id="email" label="Email" fullWidth />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="mobile"
                                                label="Mobile"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField id="phone" label="Phone" fullWidth />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="profession"
                                                label="Profession"

                                                fullWidth
                                            />
                                        </ListItem>
                                        <ListItem>
                                            <TextField
                                                id="address"
                                                label="Address"
                                                fullWidth
                                            />
                                        </ListItem>

                                    </List>

                                </Grid>

                                <Grid item xs={6} sm={3}>

                                    <List>
                                        <ListItem>
                                            <Chip label="Property" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />
                                        <ListItem>
                                            <FormControl
                                                fullWidth
                                            >
                                                <InputLabel>
                                                    Type
                                                </InputLabel>
                                                <Select
                                                    value={propertyType}
                                                    name="propertyType"
                                                    onChange={this.onChange}
                                                >
                                                    {propertyTypeList.map((obj) => (
                                                        <MenuItem
                                                            key={obj.id}
                                                            value={obj.id}
                                                        >
                                                            {obj.value}
                                                        </MenuItem>
                                                    )
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </ListItem>

                                        {(() => {
                                            switch (propertyType) {
                                            case 'd':
                                                return (
                                                    <Fragment>
                                                        <ListItem>
                                                            <FormControl fullWidth>
                                                                <InputLabel>
                                                                    House Type
                                                                </InputLabel>
                                                                <Select
                                                                    name="typeDomPro"
                                                                    value={typeDomPro}
                                                                    onChange={this.onChange}
                                                                >
                                                                    {domesticPropertyTypeList.map((obj) => (
                                                                        <MenuItem
                                                                            key={obj.id}
                                                                            value={obj.id}
                                                                        >
                                                                            {obj.value}
                                                                        </MenuItem>
                                                                    ))}
                                                                </Select>
                                                            </FormControl>
                                                        </ListItem>
                                                        <ListItem>
                                                            <TextField
                                                                id="area_dom_pro"
                                                                label="Area"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                        <ListItem>
                                                            <TextField
                                                                id="family_size_dom_pro"
                                                                label="Family Size"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                        <ListItem>
                                                            <TextField
                                                                id="number_rooms_with_supply_dom_pro"
                                                                label="Number of Rooms with Supply"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                        <ListItem>
                                                            <TextField
                                                                id="others_dom_pro"
                                                                label="Other Rooms"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                    </Fragment>
                                                );
                                            case 'p':
                                                return (
                                                    <Fragment>
                                                        <ListItem>
                                                            <TextField
                                                                id="name_pub_pro"
                                                                label="Name"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                    </Fragment>
                                                );
                                            case 'ic':
                                                return (
                                                    <Fragment>
                                                        <ListItem>
                                                            <TextField
                                                                id="name_ind_com_pro"
                                                                label="Name"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                        <ListItem>
                                                            <TextField
                                                                id="size_ind_com_pro"
                                                                label="Size"

                                                                fullWidth

                                                            />
                                                        </ListItem>
                                                    </Fragment>
                                                );
                                            default:
                                                break;
                                            }
                                            return undefined;
                                        })()}

                                    </List>

                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <List>
                                        <ListItem>
                                            <Chip label="Services" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <FormGroup>
                                                <FormControlLabel
                                                    control={(
                                                        <Switch
                                                            color="primary"
                                                            onChange={this.onChange}
                                                        />
                                                    )}
                                                    label="Service 1"
                                                />
                                                <FormControlLabel
                                                    control={(
                                                        <Switch
                                                            color="primary"
                                                            onChange={this.onChange}
                                                        />
                                                    )}
                                                    label="Service 2"
                                                />
                                                <FormControlLabel
                                                    control={(
                                                        <Switch
                                                            color="primary"
                                                            onChange={this.onChange}
                                                        />
                                                    )}
                                                    label="Service 3"
                                                />
                                                <FormControlLabel
                                                    control={(
                                                        <Switch
                                                            color="primary"
                                                            onChange={this.onChange}
                                                        />
                                                    )}
                                                    label="Service 4"
                                                />
                                            </FormGroup>
                                        </ListItem>

                                    </List>

                                    <List>
                                        <ListItem>
                                            <Chip label="Attached Files" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                className={classes.input}
                                                id="outlined-button-file-1"
                                                type="file"
                                            />
                                            <label htmlFor="outlined-button-file-1">
                                                <Button
                                                    id="outlined-button-file-1"
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
                                                className={classes.input}
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
                                                className={classes.input}
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

                                        <ListItem>
                                            <input
                                                style={{ display: 'none' }}
                                                accept="image/*"
                                                className={classes.input}
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
                                                    Please Attach ... File
                                                </Button>
                                            </label>
                                        </ListItem>

                                    </List>

                                    <List>
                                        <ListItem>
                                            <Chip label="Pricing" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <FormControl fullWidth>
                                                <InputLabel>
                                                    Tariff
                                                </InputLabel>
                                                <Select
                                                    name="tariff"
                                                    required
                                                    value={tariff}
                                                    labelWidth={labelWidth}
                                                    onChange={this.onChange}
                                                >
                                                    <MenuItem value="1">TA-1 (15% OFF)</MenuItem>
                                                    <MenuItem value="2">TA-2 (Standard)</MenuItem>
                                                    <MenuItem value="3">TA-3</MenuItem>
                                                    <MenuItem value="4">TA-4</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </ListItem>

                                    </List>
                                </Grid>

                                <Grid item xs={6} sm={3}>
                                    <List>
                                        <ListItem>
                                            <Chip label="Other" color="primary" />
                                        </ListItem>

                                        <Divider variant="middle" />

                                        <ListItem>
                                            <TextField
                                                label="Observations"
                                                multiline
                                                rows="6"
                                                fullWidth

                                            />
                                        </ListItem>

                                    </List>
                                </Grid>

                                <Grid item sm={3}>
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


Applications.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Applications);
