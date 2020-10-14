import React, { useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Report from '../Report/Report'

const questions = require('../../MockData/questions.json')



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
}));

const Dashboard = ({ handleBackButton2 }) => {
    const [value, setValue] = React.useState([]);


    console.log("xxxxxx ", value)
    const [showDash, setShowDash] = React.useState(true)
const [showReport, setShowReport] = React.useState(false)
    const getValue = (i) => {
        let x = value[i]
        if (x) {
            return x.a
        }
    }

    const handleChange = (event) => {
        let p = { q: event.target.name, a: event.target.value }

        let q = value.filter(v => v.q !== event.target.name)


        setValue([...q, ...[p]]);
    };


    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

      
    return (<div>


        {showDash && <div> <Button size="small" variant="contained" onClick={() => {
        handleBackButton2()
        }}>
            Go back
                </Button>
            <br></br>
            <br></br>         <br></br>
            <Typography variant="h4" gutterBottom>
                Assessment
      </Typography>
            <br></br>
            {
                questions.questions.map((v, i) => {
                    return <Paper key={i} className={classes.paper}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend" className=" full-width-text">
                                {v.id}: {v.text}</FormLabel>

                            <br />
                            <RadioGroup aria-label="options" name={v.id} value={getValue(i)} onChange={(event) => {
                                console.log("ccc", value[0])
                                handleChange(event)
                            }}>
                                {v.option.map((v, i) => {

                                    return <FormControlLabel value={v.weight} key={i} control={<Radio />} label={v.text} onClick={(event) => {

                                    }} />
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Paper>
                })
            }

<br></br>
                    <br></br>

                    <Button size="large" variant="contained" color="secondary" onClick={()=>{
                            setShowReport(true)
                            setShowDash(false)
                    }}>
                        Submit
                </Button>
                    <br></br>
                    <br></br>

        </div>}



                        {showReport && <Report value= {value}/> }

    </div>
    )
}

export default Dashboard;