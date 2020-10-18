import React,{useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css'

import CookBooks from './components/Cookbooks/Cookbook'
import Report from './components/Report/Report'
import Dashboard from './components/Dashboard/Dashboard';
import ConfirmUser from '../src/components/ConfirmUser/ConfirmUser'

import { MusicPlayerProvider } from "./appContext";


const App = () => {


    return (
        <MusicPlayerProvider>

            <div>
            <ConfirmUser />
            </div>

        </MusicPlayerProvider>
    )
}
export default App;
