import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Dashboard from '../Dashboard/Dashboard'


const ConfirmUser = ({ user, role, handleBackButton }) => {



    const [showDashboard, setShowDashBoard] =useState(false)
const [showConfirmPage, setShowConfirmPage] = useState(true)

const handleBackButton2 = () => {
    setShowConfirmPage(true)
    setShowDashBoard(false)
}


    return (
        <div>

{ showConfirmPage &&  <div> <Button size="small" variant="contained" onClick={() => {
                handleBackButton()
            }}>
                Go back
                </Button>
            <br></br>
            <br></br>         <br></br>
            <Typography variant="h4" gutterBottom>
                Confirm below details,
      </Typography>

            <br></br>
            <Typography variant="h6" gutterBottom>
                First Name: {user.first_name}

            </Typography>
            <Typography variant="h6" gutterBottom>
                Last Name: {user.last_name}

            </Typography>
            <Typography variant="h6" gutterBottom>
                NID: {user.nid}

            </Typography>
            <Typography variant="h6" gutterBottom>
                Role: {role}

            </Typography>
            <br></br>
            <br></br>
            <Button size="large" variant="contained" color="secondary" onClick={()=>{
                setShowDashBoard(true)
                setShowConfirmPage(false)
                }}>
                Correct
                </Button>

            <Button size="large" variant="outlined" color="secondary">
                Incorrect
                </Button></div>
        }
        { showDashboard && <Dashboard handleBackButton2= {handleBackButton2}/>}

        </div>

    )
}
export default ConfirmUser;