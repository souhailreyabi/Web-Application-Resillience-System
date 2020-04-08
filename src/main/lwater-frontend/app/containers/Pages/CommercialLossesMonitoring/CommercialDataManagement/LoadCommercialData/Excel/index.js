import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
    gridSizing: {
        marginTop: '12%'
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
};

class LoadCommercialDataFromExcel extends Component {
    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Load Commercial Data From Excel';
        const description = brand.desc;
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <Grid
                    className={classes.gridSizing}
                    container
                    spacing={10}
                    alignItems="center"
                    justify="center"
                >

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            color="primary"
                            component={Link}
                            to="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-excel/configure-excel-data"
                            fullWidth
                        >
                            Configure Excel Data
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            color="primary"
                            component={Link}
                            to="/app/commercial-losses-monitoring/commercial-data-management/load-commercial-data/load-commercial-data-from-excel/import-excel-data"
                            fullWidth
                        >
                            Import Excel Data
                        </Button>
                    </Grid>

                </Grid>

            </div>
        );
    }
}


LoadCommercialDataFromExcel.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoadCommercialDataFromExcel);
