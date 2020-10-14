import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid } from '@material-ui/core';
import "./Login.css"
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';
import FormControl from '@material-ui/core/FormControl';
import ConfirmUser from '../ConfirmUser/ConfirmUser'

const users = require("../../MockData/users.json")
const roles = require("../../MockData/roles.json")

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '50%',
        },

        formControl: {
            margin: theme.spacing(1),
            minWidth: 500,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }

}));

const UserNotFoundErrMsg = () => {
    return (
        <Alert severity="error">User not found for given email id. please try again!</Alert>
    )
}

function Login() {

    const [role, setRole] = React.useState('Not Selected');
    const [email, setEmail] = React.useState('')
    const [userNotFoundErr, setUserNotFoundErr] = React.useState(false)
    const [showConfirmUser, setShowConfirmUser] = React.useState(false)
    const [user, setUser] = React.useState({})
    const [showLogin, setShowLogin] = React.useState(true)

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    const handleOnSubmitEmailId = () => {
        let userFound = users.users.filter((v) => { return email.toLowerCase() === v.email.toLowerCase() })
        if (userFound.length > 0) {
            setUserNotFoundErr(false)
            setUser(userFound[0])
            setShowLogin(false)
            setShowConfirmUser(true)
        } else {
            setUserNotFoundErr(true)
        }
    }

    const handleBackButton = () => {
        setShowLogin(true)
        setShowConfirmUser(false)
    }

    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])



    return (
        <Grid container spacing={10}>
            <Grid className="topmargin" item xs={12}>

                {showLogin && <div>
                    <Typography variant="h4" gutterBottom>
                        Hi There 👋, Welcome to Self Service Portal
      </Typography>
                    <br></br>

                    <Typography variant="h5" gutterBottom>
                        Please enter your email id
      </Typography>


                    <form className={classes.root} noValidate autoComplete="off">

                        <TextField id="outlined-basic" label="Required" value={email} required variant="outlined" onChange={(event) => {
                            setEmail(event.target.value)

                        }} />

                    </form>

                    <Typography variant="h5" gutterBottom>
                        and select role to continue..
      </Typography>

                    <FormControl variant="outlined" className={classes.formControl}>
                        <Select
                            value={role}
                            onChange={handleChange}
                            displayEmpty
                            className={classes.formControl}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="Not Selected" disabled>
                                Not Selected
          </MenuItem>
                            {
                                roles.roles.map((v, i) => {
                                    return <MenuItem value={v} key={i}>{v}</MenuItem>
                                })
                            }
                        </Select>
                    </FormControl>
                    <br></br>
                    <br></br>

                    <Button size="large" variant="contained" color="secondary" onClick={handleOnSubmitEmailId}>
                        Continue
                </Button>
                    <br></br>
                    <br></br>
                    {userNotFoundErr && <UserNotFoundErrMsg />}
                </div>}
                {showConfirmUser && <ConfirmUser user={user} role={role} handleBackButton={handleBackButton}></ConfirmUser>}

            </Grid>
        </Grid>
    );
}

export default Login;
