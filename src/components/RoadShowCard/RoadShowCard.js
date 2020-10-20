import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import {fav_rows} from '../ConfirmUser/favorites'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
  },
  media: {
    height: 220,
    paddingTop: '1%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard({img, xtitle}) {
  const classes = useStyles();
  const [fav, setFav] = useState('none')



  return (
    <Card className={classes.root}>
      <CardHeader

        title={xtitle}
        subheader="September 14, 2016"
      />
  <CardMedia
        className={classes.media}
        image={img}
        title="road1"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        2020 ROADSHOW TOUR CANCELED
AUGUST 25, 2020 — ROADSHOW continues to prioritize the safety and health of its event guests, volunteers, appraisers, staff and crew.

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites" color={fav} onClick={(event)=>{
         fav === 'none'? setFav('secondary') : setFav('none')
           fav_rows.push({ id: '1', type: 'Road Shows', name: xtitle, link: 'https://www.ironpeacockevents.com/roadshow-events'})
        }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions>
    </Card>
  );
}
