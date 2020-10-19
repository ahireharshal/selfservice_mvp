import React,{useContext} from 'react';
import Typography from '@material-ui/core/Typography';
import './App.css'


import Chat from '../src/components/Chat/Chat'


import Report from './components/Report/Report'
import Dashboard from './components/Dashboard/Dashboard';
import ConfirmUser from '../src/components/ConfirmUser/ConfirmUser'

import { MusicPlayerProvider } from "./appContext";


const App = () => {


    return (
        <MusicPlayerProvider>

            <div>
            <ConfirmUser />
        <Chat />
            </div>
        </MusicPlayerProvider>
    )
}
export default App;
