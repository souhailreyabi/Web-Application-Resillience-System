import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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

class CommercialLossesMonitoring extends React.Component {
    render() {
        const { classes } = this.props;
        const title = brand.name + ' - Commercial Losses Monitoring';
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
                            component={Link}
                            to="/app/commercial-losses-monitoring/commercial-data-management"
                            color="primary"
                            fullWidth
                        >
                            Gestión Datos Comerciales
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            component={Link}
                            to="/app/commercial-losses-monitoring/subscriber-profile"
                            color="primary"
                            fullWidth
                        >
                            Perfil del Abonado
                        </Button>
                    </Grid>

                </Grid>

                <Grid
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
                            component={Link}
                            to="/app/commercial-losses-monitoring/metering-data-management"
                            color="primary"
                            fullWidth
                        >
                            Gestión Datos de Medición
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            component={Link}
                            to="/app/commercial-losses-monitoring/billing-data-management"
                            color="primary"
                            fullWidth
                        >
                            Gestión Datos de Facturación
                        </Button>
                    </Grid>
                </Grid>

            </div>
        );
    }
}


CommercialLossesMonitoring.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommercialLossesMonitoring);
