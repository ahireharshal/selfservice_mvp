import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';


  import VerticalTabs from '../components/SelfServiceTab/SelfServiceTab'


const Profile = () => <div>You're on the Profile Tab</div>;
const Comments = () => <div>You're on the Comments Tab</div>;
const Contact = () => <div>You're on the Contact Tab</div>;


const Test = ()=>{
    return <h1>Helloooooo</h1>
}

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


    console.log('in self service')
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