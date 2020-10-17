import React,{useContext} from 'react';
import Login from './components/Login/Login'
import Typography from '@material-ui/core/Typography';
import './App.css'

import CookBooks from './components/Cookbooks/Cookbook'
import Report from './components/Report/Report'
import Dashboard from './components/Dashboard/Dashboard';



import { MusicPlayerProvider } from "./appContext";

import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs'
const App = () => {


    return (
        <MusicPlayerProvider>
        <div>
            <div className="main-div">
            <Typography variant="h6" gutterBottom>
             


            </Typography>
                <hr></hr>

            </div>
            <Breadcrumbs />
            <Login />
            <div>
                <hr></hr>
                <Typography variant="h6" gutterBottom>
             ABOUT US

            </Typography>
            </div>


        </div>
        </MusicPlayerProvider>
    )
}
export default App;
