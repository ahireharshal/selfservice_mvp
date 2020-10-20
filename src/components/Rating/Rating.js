import React, { useState} from 'react';
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


import './Rating.css'

import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';




import Typography from '@material-ui/core/Typography';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RatingPopUp = ({showPopUp, setShowPopUp})=>{

  const [state, setState] = React.useState({
    gilad: false,
    jason: false,
    antoine: false,
    a:false,
    b:false,
    c:false,
    aa:false,
    bb:false,
    cc:false
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  const { gilad, jason, antoine, a,b,c ,aa,bb,cc} = state;
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
        <DialogContent className="desc-padding">
            <DialogContentText id="alert-dialog-slide-description ">
      <Typography variant="h6" gutterBottom>
        Q. What can be better?
      </Typography>


      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={gilad} onChange={handleChange} name="gilad" />}
            label="Presentation"
          />
          <FormControlLabel
            control={<Checkbox checked={jason} onChange={handleChange} name="jason" />}
            label="Content"
          />
          <FormControlLabel
            control={<Checkbox checked={antoine} onChange={handleChange} name="antoine" />}
            label="Hands-on"
          />
        </FormGroup>
      </FormControl>


<br />
<br />



      <Typography variant="h6" gutterBottom>
        Q. The objective of this training clearly defined?
      </Typography>


      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={a} onChange={handleChange} name="a" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox checked={b} onChange={handleChange} name="b" />}
            label="Somewhat"
          />
          <FormControlLabel
            control={<Checkbox checked={c} onChange={handleChange} name="c" />}
            label="Not at all"
          />
        </FormGroup>
      </FormControl>


      <br />
<br />



      <Typography variant="h6" gutterBottom>
        Q. The trainer was well prepared?
      </Typography>


      <FormControl component="fieldset">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={aa} onChange={handleChange} name="aa" />}
            label="Yes"
          />
          <FormControlLabel
            control={<Checkbox checked={bb} onChange={handleChange} name="bb" />}
            label="Somewhat"
          />
          <FormControlLabel
            control={<Checkbox checked={cc} onChange={handleChange} name="cc" />}
            label="Not at all"
          />
        </FormGroup>
      </FormControl>



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
  }
});

export default function HoverRating({r_index}) {





  const [value, setValue] = React.useState({});
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();
const [showPopUp, setShowPopUp] = useState(false)



  return (

    <div>

<div className={classes.root}>
      <Rating
        name={r_index}
        value={value[r_index]}
        precision={0.5}
        onChange={(event, newValue) => {



          
          setValue({ ...value, [event.target.name]: newValue});
          if (value[r_index] < 2.5){
            setShowPopUp(true)
          }
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value[r_index] !== null && <Box ml={2}>{labels[hover !== -1 ? hover : value[r_index]]}</Box>}
    </div>
  <RatingPopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>

    </div>

  );
}
