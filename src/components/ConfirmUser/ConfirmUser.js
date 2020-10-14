import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const ConfirmUser = ({ user, role, handleBackButton }) => {
    return (
        <div>

            <Button size="small" variant="contained" onClick={() => {
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
            <Button size="large" variant="contained" color="secondary">
                Correct
                </Button>

            <Button size="large" variant="outlined" color="secondary">
                Incorrect
                </Button>
        </div>
    )
}
export default ConfirmUser;