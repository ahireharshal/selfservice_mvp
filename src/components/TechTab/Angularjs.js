import React from 'react'

import Typography from '@material-ui/core/Typography';
import {
    DataGrid,
} from "@material-ui/data-grid";
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card'

import {a_book_rows, book_cols} from './handbooks'
import {a_cert_rows, cert_cols} from './certfications'





const AngularJS = () => {





    return (

        <div>

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
                    <DataGrid rows={a_book_rows} columns={book_cols} pageSize={5} />
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
                <div style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={a_cert_rows} columns={cert_cols} pageSize={5} />
                </div>
            </div>
        </div>

    )

}

export default AngularJS