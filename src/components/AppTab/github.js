import React from 'react'

import Typography from '@material-ui/core/Typography';
import {
    DataGrid,
} from "@material-ui/data-grid";

import {g_training_rows, training_cols} from './training'
import {g_book_rows, book_cols} from './handbooks'
import {g_tutorials_rows, tutorials_cols} from './tutorial'




const Github = () => {







    return (

        <div>

<div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     KT Sessions/Videos
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