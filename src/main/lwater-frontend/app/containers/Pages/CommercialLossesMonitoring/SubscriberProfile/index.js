import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
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

class SubscriberProfile extends React.Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Subscriber Profile';
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
                    component={Link}
                    to="/app/commercial-losses-monitoring/subscriber-profile/domestic"
                    color="primary"
                    fullWidth>
              Domestico
            </Button>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Button className={classes.buttonSpacing}
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/app/commercial-losses-monitoring/subscriber-profile/industrial-commercial"
                    color="primary"
                    fullWidth>
              Industrial - Comercial
            </Button>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Button className={classes.buttonSpacing}
                    variant="contained"
                    size="large"
                    component={Link}
                    to="/app/commercial-losses-monitoring/subscriber-profile/public"
                    color="primary"
                    fullWidth>
              Público
            </Button>
          </Grid>

        </Grid>

      </div>
    );
  }
}


SubscriberProfile.propTypes = {};

export default withStyles(styles)(SubscriberProfile);
