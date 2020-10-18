import React, { useEffect } from 'react'

import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {
    DataGrid,
} from "@material-ui/data-grid";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '../Card/Card'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import Cookbook from '../Cookbooks/Cookbook'
import {p_training_rows, training_cols} from './training'
import {p_book_rows, book_cols} from './handbooks'
import {p_cert_rows, cert_cols} from './certfications'
import VDO from '../CardMedia/CardMedia'

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




const Postgre = () => {


    const classes = useStyles();




    return (

        <div>
            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Upcoming Trainings
                     <br></br>
                    <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid  rows={p_training_rows} columns={training_cols} pageSize={5}  />
                </div>
            </div>


            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Handbooks
                     <br></br>
                    <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={p_book_rows} columns={book_cols} pageSize={5} />
                </div>
            </div>

        <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Blog Posts
                     <br></br>
                    <br></br>
                </Typography>
            </div>




<Grid container spacing={3}>
                <Grid  item xs={4} spacing={2}>
<div><Card /></div>

                </Grid>
                <Grid  item xs={4} spacing={2}>
<div><Card /></div>

                </Grid>
                <Grid  item xs={4} spacing={2}>
<div><Card /></div>

                </Grid>

            </Grid>



            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Certfications
                     <br></br>
                    <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={p_cert_rows} columns={cert_cols} pageSize={5} />
                </div>
            </div>

        </div>

    )

}

export default Postgre