import React, {useEffect, useState, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import Dialog from '@material-ui/core/Dialog';


import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RatingPopUp = ({showPopUp, setShowPopUp})=>{

  return (
    <div>

    <Dialog
        open={showPopUp}
        TransitionComponent={Transition}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
    >
        <DialogTitle id="alert-dialog-slide-title">{"Let us know about this feedback"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            
  </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button  color="primary" onClick={()=>{setShowPopUp(false)}}>
                Close
  </Button>
        </DialogActions>
    </Dialog>
</div>
  )
}

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
const [showPopUp, setShowPopUp] = useState(false)


  return (

    <div>

<div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (value < 2.5){
            setShowPopUp(true)
          }
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>}
    </div>
  <RatingPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>

    </div>

  );
}
