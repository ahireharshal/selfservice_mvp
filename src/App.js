import React,{useContext} from 'react';
import './App.css'

import Chat from '../src/components/Chat/Chat'
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
