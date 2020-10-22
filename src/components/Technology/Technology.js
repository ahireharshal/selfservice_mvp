import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';




import TechTab from '../TechTab/TechTab'


const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
        maxWidth: 1000,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const Technology = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={12}>

                    <TechTab />
                </Grid>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>

                </Grid>

            </Grid>
        </div>
    )
}

export default Technology;