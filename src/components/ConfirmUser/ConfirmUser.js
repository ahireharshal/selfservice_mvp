import React, { useState, useContext } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Dashboard from '../Dashboard/Dashboard'
import { MusicPlayerContext } from '../../appContext'
import './ConfirmUser.css'


import Navbar from '../Navbar/Navbar'
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs'

import SelfService from '../../SelfService/SelfService'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';





const Test = () => {
    return <h1>Helloooooo</h1>
}
const ConfirmUser = ({ user, role }) => {

    const [state, setState] = useContext(MusicPlayerContext);

    return (
        <div>



            { state.showConfirmPage && <div>
                
                

                <Navbar />

                

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
                        <Link className="link-styles" to="/selfservice">        <Button className="button-height" size="large" >Self Service Artifacts        </Button></Link>
                        <Link className="link-styles" to="/home"><Button className="button-height" size="large" >Group Knowledge Sessions  </Button></Link>
                        <Link className="link-styles" to="/inbox">        <Button className="button-height" size="large" >Help Desk   </Button></Link>
                    </Paper>
                </div>
                <br></br>

                <br></br>
                <main>

                    <Switch>
                        <Route path="/selfservice" component={SelfService} exact />
                    </Switch>
                </main>

                <br></br>






                <br></br>
                <br></br>
                <Button size="large" variant="contained" color="secondary" onClick={() => {

                    console.log('1', state)

                    setState(state => ({ ...state, showConfirmPage: false }))

                    setState(state => ({ ...state, showDashboard: true }))

                    console.log('2', state)

                }}>
                    Continue
                </Button>

         </div>
            }
            <Dashboard />

        </div>

    )
}
export default ConfirmUser;