import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/Login'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const roles = require("./MockData/roles.json")

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },

    },

}));




function App() {

    const [role, setRole] = React.useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h1>Welcome to self service dashboard.</h1>
            <h2>Enter your email id to continue..</h2>

            <form className={classes.root} noValidate autoComplete="off">

                <TextField id="outlined-basic" label="Required" required variant="outlined" />
                <Button variant="contained" size="large" color="secondary">
                    Continue
                </Button>
            </form>

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    onChange={handleChange}
                >
                    {
                        roles.roles.map((v, i) => {
                            return <MenuItem value={v} key={i}>{v}</MenuItem>
                        })
                    }
                </Select>
            </FormControl>
        </div>
    );
}

export default App;
