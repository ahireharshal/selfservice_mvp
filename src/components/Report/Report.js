import React, { useEffect, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import './Report.css'
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import {
    DataGrid,
} from "@material-ui/data-grid";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import MyResponsiveRadar from '../Chart/ReportRadar'

import { MusicPlayerContext } from '../../appContext'

import CookBooks from '../../components/Cookbooks/Cookbook'



const data = [
    {
        "rating": "Beginner",
        "AWS": 800,
        "Coding": 700,
        "Security": 600
    },
    {
        "rating": "Competent",
        "AWS": 355,
        "Coding": 800,
        "Security": 400
    }, {
        "rating": "Expert",
        "AWS": 500,
        "Coding": 550,
        "Security": 800
    },
]

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

const columns = [


    {
        field: "",
        headerName: "Invite",
        sortable: false,
        width: 100,
        disableClickEventBubbling: true,
        renderCell: () => {
            return <IconButton aria-label="download" href="/event.ics" target="_blank">
                <CloudDownloadIcon fontSize="large" />
            </IconButton>
        }
    },

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'training_name', headerName: 'Training Name', width: 230 },
    { field: 'duration', headerName: 'Duration', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'date', headerName: 'Date', width: 230 },
];


const columns2 = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'desc', headerName: 'Descrption', width: 250 },

    {
        field: "link",
        headerName: "Link",
        sortable: false,
        width: 250,
        disableClickEventBubbling: true,
        renderCell: () => {
            return <a href="https://www.w3schools.com" rel="noopener noreferrer" target="_blank">Visit W3Schools</a>
        }
    },


];


const rows2 = [
    { id: 1, desc: 'AWS EC2' },
    { id: 2, desc: 'AWS handbook' },

    { id: 3, desc: 'Terradata guide' },
    { id: 4, desc: 'step by step talend' },

    { id: 5, desc: 'Snowflake guide' },



]

const rows = [
    { id: 1, training_name: 'AWS EC2', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 2, training_name: 'AWS Lambda', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 3, training_name: 'Terraform', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 24, 2020' },

    { id: 4, training_name: 'Big Data', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 4, 2020' },

    { id: 5, training_name: 'AWS Security', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

    { id: 6, training_name: 'Coding Standard', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 12, 2020' },

    { id: 7, training_name: 'Python Advance Level', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 3, 2020' },

    { id: 8, training_name: 'AWS VPC', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 13, 2020' },

    { id: 9, training_name: 'AWS ESC', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },
    { id: 10, training_name: 'AWS Redshift', duration: '1:30 Hr', location: 'Harford, CT', date: 'October 14, 2020' },

];

const Report = ({ value }) => {


    const [state, setState] = useContext(MusicPlayerContext);

    const classes = useStyles();



    let score = 0
    let total = 0


    value.forEach(v => {
        score = score + parseInt(v.a)
        total = total + 100
    })

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <div>




            <Typography variant="h5" gutterBottom>
                Report Summary

            </Typography>

            <hr />





            <Grid container spacing={3}>
                <Grid item xs>
                    <Typography variant="h6" gutterBottom>
                        <br></br>
                Below score calculated based on the anwser that you have provided.

            </Typography>




                    <Paper className={classes.paper}>
                        <Grid container spacing={0}>

                            <Grid item xs={1} sm container>
                                <Grid item xs container direction="column" spacing={0}>
                                    <Grid item xs>
                                        <Typography variant="h6" gutterBottom>
                                            Overall Score
                </Typography>
                                        <Typography variant="h4" gutterBottom>
                                            {score}/{total}
                                        </Typography>


                                    </Grid>

                                </Grid>

                            </Grid>
                        </Grid>
                    </Paper>

                </Grid>
                <Grid item xs>
                    <div className="report-chart">

                        <MyResponsiveRadar data={data} />

                    </div>
                </Grid>
            </Grid>








            <br></br>
            <br></br>

            <div>
                <div>
                    <Typography variant="h6" gutterBottom>
                        Training Recommendations
                        <br></br>
                        <br></br>
                    </Typography>
                </div>
                <div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
                    </div>
                </div>
            </div>


            <br></br>
            <br></br>

            <div>
                <div>
                    <Typography variant="h6" gutterBottom>
                        Self Service Tools and Guide Links
                        <br></br>
                        <br></br>
                    </Typography>
                </div>
                <div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={rows2} columns={columns2} pageSize={5} checkboxSelection />
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>



            <CookBooks />

            <br></br>
            <br></br>
            <Button size="large" variant="contained" color="secondary" onClick={() => {
                window.location.reload();
            }}>
                Close
            </Button>



        </div>
    )
}
export default Report;