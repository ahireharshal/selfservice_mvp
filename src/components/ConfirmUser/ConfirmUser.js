import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Dashboard from '../Dashboard/Dashboard'
import { MusicPlayerContext } from '../../appContext'
import './ConfirmUser.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import Navbar from '../Navbar/Navbar'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import SelfService from '../../SelfService/SelfService'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Slide from '@material-ui/core/Slide';


import {
    DataGrid,
} from "@material-ui/data-grid";

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Knowledge from '../Knowledge/Knowledge'

import Help from '../Help/Help'

import {fav_rows, fav_cols} from './favorites'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const ConfirmUser = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useContext(MusicPlayerContext);

    return (
        <div>
            { state.showConfirmPage && <div>
                <br></br>
                <br></br>
                <br></br>
                <Typography variant="h4" gutterBottom>
                    Hi Harshal,
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Welcome to Self service portal.
                </Typography>
                <br></br>
                <br></br>
                <div>
                    <Paper elevation={3}>
                        <Link className="link-styles" to="/selfservice">        <Button className="button-height" size="large" >Self Service Artifacts </Button></Link>
                        <Link className="link-styles" to="/knowledge"><Button className="button-height" size="large" >Group Knowledge Sessions  </Button></Link>
                        <Link className="link-styles" to="/help">        <Button className="button-height" size="large" >Help Desk   </Button></Link>
                        <Link className="link-styles float-right">        <Button className="button-height" size="large" onClick={()=>{
                            setOpen(true)
                        }}><BookmarksIcon />Favorites</Button></Link>
                    </Paper>
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
            <Dashboard />
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
                        <Button onClick={()=>{
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