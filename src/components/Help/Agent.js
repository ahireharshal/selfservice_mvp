import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

import Badge from '@material-ui/core/Badge';
import {  withStyles } from '@material-ui/core/styles';

import Avatar from '../Avatar/Avatar'


import './Help.css'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
 

import 'react-big-calendar/lib/sass/styles.scss';
//import 'react-big-calendar/lib/addons/dragAndDrop/styles'; // if using DnD


const localizer = momentLocalizer(moment)



const now = new Date()

const myEventsList =[
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2015, 3, 0),
    end: new Date(2015, 3, 1),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2015, 3, 7),
    end: new Date(2015, 3, 10),
  },

  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2016, 2, 13, 0, 0, 0),
    end: new Date(2016, 2, 20, 0, 0, 0),
  },

  {
    id: 3,
    title: 'DTS ENDS',
    start: new Date(2016, 10, 6, 0, 0, 0),
    end: new Date(2016, 10, 13, 0, 0, 0),
  },

  {
    id: 4,
    title: 'Some Event',
    start: new Date(2015, 3, 9, 0, 0, 0),
    end: new Date(2015, 3, 10, 0, 0, 0),
  },
  {
    id: 5,
    title: 'Conference',
    start: new Date(2015, 3, 11),
    end: new Date(2015, 3, 13),
    desc: 'Big conference for important people',
  },
  {
    id: 6,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 10, 30, 0, 0),
    end: new Date(2015, 3, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting',
  },
  {
    id: 7,
    title: 'Lunch',
    start: new Date(2015, 3, 12, 12, 0, 0, 0),
    end: new Date(2015, 3, 12, 13, 0, 0, 0),
    desc: 'Power lunch',
  },
  {
    id: 8,
    title: 'Meeting',
    start: new Date(2015, 3, 12, 14, 0, 0, 0),
    end: new Date(2015, 3, 12, 15, 0, 0, 0),
  },
  {
    id: 9,
    title: 'Happy Hour',
    start: new Date(2015, 3, 12, 17, 0, 0, 0),
    end: new Date(2015, 3, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day',
  },
  {
    id: 10,
    title: 'Dinner',
    start: new Date(2015, 3, 12, 20, 0, 0, 0),
    end: new Date(2015, 3, 12, 21, 0, 0, 0),
  },
  {
    id: 11,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  },
  {
    id: 12,
    title: 'Late Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 18, 2, 0, 0),
  },
  {
    id: 12.5,
    title: 'Late Same Night Event',
    start: new Date(2015, 3, 17, 19, 30, 0),
    end: new Date(2015, 3, 17, 23, 30, 0),
  },
  {
    id: 14,
    title: 'Harshal - DevOps Connect',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 15,
    title: 'Harshal - ICS team connect',
    start: now,
    end: now,
  },
  {
    id: 16,
    title: 'Harshal - Connect with AWS',
    start: new Date(2020, 9, 23, 15, 30, 0),
    end: new Date(2020, 9, 24, 19, 0, 0),
  },
  {
    id: 17,
    title: 'Rohit - Prod Support',
    start: new Date(2020, 9, 26, 16, 30, 0),
    end: new Date(2020,9, 28, 20, 0, 0),
  },
  {
    id: 18,
    title: 'Itaewon Halloween Meeting',
    start: new Date(2015, 3, 14, 16, 30, 0),
    end: new Date(2015, 3, 14, 17, 30, 0),
  },
  {
    id: 19,
    title: 'Online Coding Test',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 20, 30, 0),
  },
  {
    id: 20,
    title: 'An overlapped Event',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 21,
    title: 'Phone Interview',
    start: new Date(2015, 3, 14, 17, 0, 0),
    end: new Date(2015, 3, 14, 18, 30, 0),
  },
  {
    id: 22,
    title: 'Cooking Class',
    start: new Date(2015, 3, 14, 17, 30, 0),
    end: new Date(2015, 3, 14, 19, 0, 0),
  },
  {
    id: 23,
    title: 'Go to the gym',
    start: new Date(2015, 3, 14, 18, 30, 0),
    end: new Date(2015, 3, 14, 20, 0, 0),
  },
]


const MyCalendar = props => (
    <div>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  )



export const cols = [
    { field: 'id', headerName: 'Ticket ID', width: 50 },


    { field: 'subject', headerName: 'Subject', width: 230 },
    { field: 'desc', headerName: 'Description', width: 90 },
    { field: 'status', headerName: 'Status', width: 120 },
    { field: 'date', headerName: 'date', width: 120 },


];

//export let rows = [
//  { id: 1, subject: 'Help me to get AWS documents', desc: 'Hi,Could you please provide me the deatils of AWS EC2 instances. Thanks', status: 'Open', date: 'October 14, 2020' },
//];

const StyledBadge = withStyles((theme) => ({
    badge: {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }))(Badge);


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '55ch',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            width: '55ch',
        },
    },
    list: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function FormPropsTextFields() {


  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



    const classes = useStyles();
const [agent, setAgent] = useState('')

    const [open, setOpen] = React.useState(false);


    console.log('agent', agent)
    return (
        <div className={classes.root}>

<Typography variant="h6" gutterBottom>
    Initiate Chat with Agents 
                        </Typography>


            <Grid container spacing={1}>
                <Grid item xs={5} spacing={1} className="text-format">


                    <List component="nav" className="agent-list-width" aria-label="mailbox folders">
                        <ListItem button onClick={()=>{
                            setAgent('Harshal Ahire')
                        }}>

<StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar text="HA" />
      </StyledBadge>



                            <ListItemText primary="Harshal Ahire" secondary="harshal.ahire@lntinfotech.com. Phone:(860)900-9104"/>
                        </ListItem>
                        <Divider />
                        <ListItem button divider onClick={()=>{
                               setAgent('Rohit Jagtap')
                        }}>
                            <Avatar text="RJ" />
                            <ListItemText primary="Rohit Jagtap" secondary="Rohit.Jagtap@lntinfotech.com. Phone:(860)666-6600"/>
                        </ListItem>
                        <ListItem button onClick={()=>{
                               setAgent('Satish Kumar')

                        }}>
                            <Avatar text="SK" />
                            <ListItemText primary="Satish Kumar"secondary="Satish.Kumar@lntinfotech.com. Phone:(860)777-7700"/>
                        </ListItem>
                        <Divider light />
                        <ListItem button onClick={()=>{
                               setAgent('Chirag Doshi')

                        }}>
                    <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant="dot"
      >
        <Avatar text="CD" />
      </StyledBadge>
                            <ListItemText primary="Chirag Doshi" secondary="Chirag.Doshi@lntinfotech.com. Phone:(860)888-8800"/>
                        </ListItem>
                    </List>


                </Grid>
                <Grid item xs={7} spacing={1}>
                    <br></br>
                   {agent &&  <><h4>Initiate a conversation with {agent} or check his calender to schedule a meeting.</h4>  <button onClick={()=>{
                     setOpen(true)
                   }}>Calendar</button></>}
                   { agent && <form className={classes.root} noValidate autoComplete="off">
                        <div>

                                <Grid item xs={11} spacing={1}>
                                    <div>
                                        <TextField
                                            fullWidth
                                            id="outlined-required"
                                            defaultValue=""
                                            variant="outlined"
                                            rows="5"
                                            multiline={true}
                                        />
                                    </div>
                                </Grid>

                                <Grid item xs={11} spacing={2}>
                                    <div>
                                        <TextField
                                            label="Enter text to continue.."
                                            fullWidth
                                            id="outlined-required"
                                            defaultValue=""
                                            variant="outlined"
                                     
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={11} spacing={2}>
                                    <div>


                                        <Button variant="contained" color="secondary">
                                            Send
                                        </Button>



                                    </div>
                                </Grid>
                        </div>

                    </form>}
                </Grid>
            </Grid>

     

            {open && <div>
                <Dialog
                    fullWidth={true}
                    maxWidth="md"
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Calender"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            <div>
                            <MyCalendar />
                            </div>
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpen(false)
                        }} color="primary">
                            Close
                </Button>
                    </DialogActions>
                </Dialog>
            </div>}


        </div>

    );
}
