import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import {
    DataGrid,
} from "@material-ui/data-grid";

import './Help.css'




export const cols = [
    { field: 'id', headerName: 'Ticket ID', width: 50 },


    { field: 'subject', headerName: 'Subject', width: 230 },
    { field: 'desc', headerName: 'Description', width: 90 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'date', headerName: 'date', width: 120 },


];

//export let rows = [
  //  { id: 1, subject: 'Help me to get AWS documents', desc: 'Hi,Could you please provide me the deatils of AWS EC2 instances. Thanks', status: 'Open', date: 'October 14, 2020' },
//];





const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '75ch',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '75ch',
        },
    },
}));

export default function FormPropsTextFields() {
    const classes = useStyles();

   const [subject, setSubject] = useState('')
    const [desc, setDesc] = useState('')
    const [rows, setRows] = useState([{ id: 1, subject: 'Help me to get AWS documents', desc: 'Hi,Could you please provide me the deatils of AWS EC2 instances. Thanks', status: 'Open', date: 'October 14, 2020' }])

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2} spacing={2} className="text-format">
                        <Typography variant="h6" gutterBottom>
                            Subject:
                        </Typography>
                    </Grid>
                    <Grid item xs={10} spacing={2}>
                        <div>
                            <TextField
                                fullWidth
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                variant="outlined"
                                onChange={(event)=>{
                                    setSubject(event.target.value)
                                    console.log(event.target.value)
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2} spacing={2} className="text-format">
                        <Typography variant="h6" gutterBottom>
                            Description:
                        </Typography>
                    </Grid>
                    <Grid item xs={10} spacing={2}>
                        <div>
                            <TextField
                            rows="10"
                                multiline={true}
                                required
                                id="outlined-required"
                                label="Required"
                                defaultValue=""
                                variant="outlined"
                                onChange={(event)=>{
                                    setDesc(event.target.value)
                                    console.log(event.target.value)
                                }}
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2} spacing={2} className="text-format">
                        <Typography variant="h6" gutterBottom>
                        </Typography>
                    </Grid>
                    <Grid item xs={10} spacing={2}>
                    <Button variant="contained" color="secondary" onClick={()=>{
                        setRows(rows,...[{ id: 1, subject: subject, desc: desc, status: 'Open', date: 'October 14, 2020' }])
                    }}>
  Submit Ticket
</Button>
                    </Grid>
                </Grid>
            </div>
<br></br>
<br></br>

            <div>
                <Grid container spacing={3}>
                    <Grid item xs={2} spacing={2} className="text-format">
                        <Typography variant="h6" gutterBottom>
                            Tickets:
                        </Typography>
                    </Grid>
                    <Grid item xs={10} spacing={2}>
                    <div>
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={cols} pageSize={5}  />
                </div>
            </div>

                    </Grid>
                </Grid>
            </div>





        </form>
    );
}
