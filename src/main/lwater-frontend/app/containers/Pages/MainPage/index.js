import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import withStyles from '@material-ui/core/styles/withStyles';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import getHtmlTitle from 'dan-api/dummy/getHtmlTitle';

const styles = {
    gridSizing: {
        marginBottom: '15%'
    },
    buttonSpacing: {
        minHeight: 90,
        minWidth: 200
    }
};

class BlankPage extends React.Component {
    render() {
        const { classes, location } = this.props;
        // TODO Generalize this on all the pages
        const title = brand.name + getHtmlTitle(location);
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
                    container
                    spacing={10}
                    alignItems="center"
                    justify="center"
                >
                    <Grid item xs={12} className={classes.gridSizing}>
                        <Box color="white" textAlign="center" fontWeight="fontWeightLight" fontSize={26}>
                            Sistema de Monitoreo de Fugas de Agua
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            component={Link}
                            to={{
                                pathname: '/app/commercial-losses-monitoring',
                                linkData: { pageTitle: this.pageTitle }
                            }}
                            color="primary"
                            fullWidth
                        >
                            Perdidas Comerciales
                        </Button>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Button
                            className={classes.buttonSpacing}
                            variant="contained"
                            size="large"
                            component={Link}
                            to="#"
                            color="primary"
                            fullWidth
                        >
                            Perdidas Técnicas
                        </Button>
                    </Grid>
                </Grid>

            </div>
        );
    }
}

BlankPage.propTypes = {
    classes: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default withStyles(styles)(BlankPage);
