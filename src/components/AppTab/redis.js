import React from 'react'

import Typography from '@material-ui/core/Typography';
import {
    DataGrid,
} from "@material-ui/data-grid";
import {r_book_rows, book_cols} from './handbooks'
import {r_tutorials_rows, tutorials_cols} from './tutorial'





const Redis = () => {







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
                <div style={{ height: '720px', width: '100%' }}>
                    <DataGrid rows={r_tutorials_rows} rowHeight ="200" columns={tutorials_cols} pageSize={10} />
                </div>
            </div>


            <div>
                <Typography variant="h6" gutterBottom>
                    <br></br>
                    <br></br>
                     Handbooks/Cookbooks
                     <br></br>
                </Typography>
            </div>
            <div>
                <div style={{ height: 400, width: '100%' }}>
                    <DataGrid rows={r_book_rows} columns={book_cols} pageSize={5} />
                </div>
            </div>




        </div>

    )

}

export default Redis