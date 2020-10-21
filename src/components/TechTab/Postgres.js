import React from 'react'

import Typography from '@material-ui/core/Typography';
import {
    DataGrid,
} from "@material-ui/data-grid";
import Grid from '@material-ui/core/Grid';
import Card from '../Card/Card'

import {p_book_rows, book_cols} from './handbooks'
import {p_cert_rows, cert_cols} from './certfications'





const Postgre = () => {






    return (

        <div>
            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Handbooks
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
                     Blog Posts
                    <br></br>
                </Typography>
            </div>




<Grid container spacing={3}>
                <Grid  item xs={4} spacing={2}>
<div><Card xtitle="Amazon S3 Update" pURL="https://aws.amazon.com/blogs/aws/amazon-s3-update-three-new-security-access-control-features/"/></div>

                </Grid>
                <Grid  item xs={4} spacing={2}>
<div><Card xtitle="Amazon SageMaker" pURL="https://aws.amazon.com/blogs/aws/amazon-sagemaker-leads-way-in-machine-learning/"/></div>

                </Grid>
                <Grid  item xs={4} spacing={2}>
<div><Card xtitle="New EC2 T4g Instances" pURL="https://aws.amazon.com/blogs/aws/new-t4g-instances-burstable-performance-powered-by-aws-graviton2/"/></div>

                </Grid>

            </Grid>



            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                     Certfications
                     <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: 250, width: '100%' }}>
                    <DataGrid rows={p_cert_rows} columns={cert_cols} pageSize={5} />
                </div>
            </div>

        </div>

    )

}

export default Postgre