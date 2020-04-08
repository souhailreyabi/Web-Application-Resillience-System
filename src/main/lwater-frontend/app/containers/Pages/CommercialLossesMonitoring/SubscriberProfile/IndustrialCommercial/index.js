import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';

const styles = {
  gridSizing: {
    marginTop: '12%'
  },
  buttonSpacing: {
    minHeight: 90,
    minWidth: 200
  }
};

class IndustrialCommercial extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Industrial & Commercial';
    const description = brand.desc;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta property="og:title" content={title}/>
          <meta property="og:description" content={description}/>
        </Helmet>

        <Grid className={classes.gridSizing}
              container
              spacing={10}
              alignItems="center"
              justify="center"
        >

          <Grid item xs={12} sm={3}>
            <Button className={classes.buttonSpacing}
                    variant="contained"
                    size="large"
                    color="primary"
                    fullWidth>
              Códigos de Actividad Económica
            </Button>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Button className={classes.buttonSpacing}
                    variant="contained"
                    size="large"
                    color="primary"
                    fullWidth>
              Analítica Consumos IC
            </Button>
          </Grid>

        </Grid>

      </div>
    );
  }
}


IndustrialCommercial.propTypes = {};

export default withStyles(styles)(IndustrialCommercial);
