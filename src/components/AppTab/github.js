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
import {g_training_rows, training_cols} from './training'
import {g_book_rows, book_cols} from './handbooks'
import {g_tutorials_rows, tutorials_cols} from './tutorial'

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




const Github = () => {


    const classes = useStyles();





    return (

        <div>

<div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     KT Sessions/Videos
                     <br></br>
                    <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: '600px', width: '100%' }}>
                    <DataGrid rows={g_tutorials_rows} rowHeight ="200" columns={tutorials_cols} pageSize={10} />
                </div>
            </div>

            
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
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={g_training_rows} columns={training_cols} pageSize={5}  />
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
                    <DataGrid rows={g_book_rows} columns={book_cols} pageSize={5} />
                </div>
            </div>

  


        </div>

    )

}

export default Github