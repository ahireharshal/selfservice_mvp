
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const CookBooks = () => {

    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>

                <Grid item xs={3}>
                    <Paper elevation={1}  className={classes.paper}><div>
                        <div>AWS EC2 Handbook</div>
                        <div><IconButton aria-label="download" href="/aws.pdf" target="_blank">
                            <CloudDownloadIcon fontSize="large" />
                        </IconButton></div>
                    </div></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper elevation={1}  className={classes.paper}><div>
                        <div>Coding Best Practice</div>
                        <div><IconButton aria-label="download" href="/aws.pdf" target="_blank">
                            <CloudDownloadIcon fontSize="large" />
                        </IconButton></div>
                    </div></Paper>
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.paper}><div>
                        <div>Big Data Handbook</div>
                        <div><IconButton aria-label="download" href="/aws.pdf" target="_blank">
                            <CloudDownloadIcon fontSize="large" />
                        </IconButton></div>
                    </div></Paper>
                </Grid>

                <Grid item xs={3}>
                    <Paper className={classes.paper}><div>
                        <div>Big Data Handbook</div>
                        <div><IconButton aria-label="download" href="/aws.pdf" target="_blank">
                            <CloudDownloadIcon fontSize="large" />
                        </IconButton></div>
                    </div></Paper>
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Grid container spacing={3}>
                <Grid container item xs={12} spacing={8}>
                    <FormRow />
                </Grid>

            </Grid>

        </div>

    )
}


export default CookBooks



