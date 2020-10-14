import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import AssessmentIcon from '@material-ui/icons/Assessment';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    maxWidth: 200,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <br></br>
        <br></br>


      <Paper className={classes.paper}>
        <Grid container spacing={0}>
   
          <Grid item xs={0} sm container>
            <Grid item xs container direction="column" spacing={0}>
              <Grid item xs>
                <Typography variant="h6" gutterBottom>
                  Overall Score
                </Typography>
                <Typography variant="h4" gutterBottom>
                450/900
      </Typography>


              </Grid>
        
            </Grid>

          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}