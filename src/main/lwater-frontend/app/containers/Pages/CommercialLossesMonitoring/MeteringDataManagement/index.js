import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    gridSizing: {
        marginTop: '12%'
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
};

class MeasurementDataManagement extends React.Component {
    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Metering Data Management';
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
                            to="/app/commercial-losses-monitoring/metering-data-management/massive-data-upload"
                            component={Link}
                            fullWidth
                        >
                            Carga de Datos Masiva
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            color="primary"
                            fullWidth
                        >
                            Gestión de Datos
                        </Button>
                    </Grid>

                </Grid>

            </div>
        );
    }
}


MeasurementDataManagement.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MeasurementDataManagement);
