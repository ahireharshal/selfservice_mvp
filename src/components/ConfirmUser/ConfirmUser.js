import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import './ConfirmUser.css'
import Grid from '@material-ui/core/Grid';

import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SelfService from '../../SelfService/SelfService'
import { Route, Switch, Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';

import {
    DataGrid,
} from "@material-ui/data-grid";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import Paper from '@material-ui/core/Paper';
import Knowledge from '../Knowledge/Knowledge'

import Help from '../Help/Help'

import { fav_rows, fav_cols } from './favorites'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const roles = {
    "roles": [
        "Business User",
        "IT User",
        "Data Scientist",
        "Data Engineer"
    ]
}





const ConfirmUser = () => {
    const [open, setOpen] = React.useState(false);


    const [role, setRole] = React.useState('Select User Type');



    console.log(role)



    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div>
            { true && <div>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="h4" gutterBottom>
                    Hi Harshal,
                </Typography>
                <Typography variant="h6" gutterBottom>
                Welcome to Hadoop on cloud user knowledge portal.
                </Typography>
                <br></br>
                <br></br>
                <div>
                    <Paper elevation={3}>
                        <Link className="link-styles" to="/selfservice">        <Button className="button-height" size="large" >Self Service Artifacts </Button></Link>
                        <Link className="link-styles" to="/knowledge"><Button className="button-height" size="large" >Group Knowledge Sessions  </Button></Link>
                        <Link className="link-styles" to="/help">        <Button className="button-height" size="large" >Help Desk   </Button></Link>
                        <Link className="link-styles float-right">        <Button className="button-height" size="large" onClick={() => {
                            setOpen(true)
                        }}><BookmarksIcon />Favorites</Button></Link>
                    </Paper>
                </div>
                <br></br>

                <div>




                <Grid container spacing={1}>
                <Grid  item xs={2} spacing={1}>   <h3> Select Persona: </h3></Grid>
                <Grid  item xs={10} spacing={1}>
                <FormControl variant="outlined"  className="select-user">
                     
                        <Select
                            value={role}
                            onChange={handleChange}
                            displayEmpty

                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="Not Selected" disabled>
                                Select User Type
                            </MenuItem>
                            {
                                roles.roles.map((v, i) => {
                                    return <MenuItem value={v} key={i}>{v}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>

                </Grid>
                </Grid>



     




                </div>
                <br></br>

                <br></br>
                <main>

                    <Switch>
                        <Route path="/selfservice" component={SelfService} exact />
                        <Route path="/knowledge" component={Knowledge} exact />
                        <Route path="/help" component={Help} exact />

                    </Switch>
                </main>

                <br></br>






                <br></br>
                <br></br>


            </div>
            }
            {open && <div>
                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Favorites"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <div>
                                <div style={{ height: 400, width: 900 }}>
                                    <DataGrid rows={fav_rows} columns={fav_cols} pageSize={6} />
                                </div>
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false)
                        }} color="primary">
                            Close
                </Button>
                    </DialogActions>
                </Dialog>
            </div>}

        </div>

    )
}
export default ConfirmUser;