import React from 'react';
import Login from './components/Login/Login'
import Typography from '@material-ui/core/Typography';
import './App.css'


import Report from './components/Report/Report'
const App = () => {
    return (
        <div>
            <div className="main-div">
            <Typography variant="h6" gutterBottom>
             TRAVELERS

            </Typography>
                <hr></hr>

            </div>
            <Login />
            <div>
                <hr></hr>
                <Typography variant="h6" gutterBottom>
             ABOUT US

            </Typography>
            </div>




        </div>
    )
}
export default App;
