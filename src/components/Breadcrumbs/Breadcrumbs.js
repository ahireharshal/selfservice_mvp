import React, {useContext} from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import HomeIcon from '@material-ui/icons/Home';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { MusicPlayerContext } from '../../appContext'



const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomizedBreadcrumbs() {

    const [state, setState] = useContext(MusicPlayerContext);


  return (
    <Breadcrumbs aria-label="breadcrumb">

{state.breadcrumbs.map(v=>{
    return      <StyledBreadcrumb
    component="a"
    href="#"
    label={v}
    onClick={handleClick}
  />
})}



  </Breadcrumbs>

  );
}