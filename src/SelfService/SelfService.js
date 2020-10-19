import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import VerticalTabs from '../components/SelfServiceTab/SelfServiceTab'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    root: {
        flexGrow: 1,
        maxWidth: '100%',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
}));

const SelfService = () => {


    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>



                <Grid item xs={12}>

                <VerticalTabs />


                </Grid>
            </Grid>
        </div>
    )
}

export default SelfService;