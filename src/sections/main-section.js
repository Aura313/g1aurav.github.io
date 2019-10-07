import * as React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, withStyles } from '@material-ui/core';

export class MainSectionInner extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card elevation={0}>
        <CardContent>
          <div className={classes.root}>
            <div style={{textAlign: 'center'}}>
              <img src="./profile_photo.jpg" style={{ maxWidth: 150, maxHeight: 150, borderRadius: 5 }} />
            </div>
            <div>
              <Typography className="title" variant="h4" style={{color: '#5B6973', fontWeight: 500}}>{this.props.resumeData.name}</Typography>
              <Typography className="title" variant="caption" color="textSecondary">{this.props.resumeData.personBio}</Typography>

              <Typography variant="body1" style={{ paddingTop: 20, textAlign: 'justify' }} color="textSecondary">{this.props.resumeData.shortDescription}</Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}


const styles = {
  root: {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: '150px auto',
    '@media only screen and (max-width: 400px)': {
      display: 'block',
      '& .title': {
        textAlign: 'center'
      }
    }
  }
};

export const MainSection = withStyles(styles)(MainSectionInner);

