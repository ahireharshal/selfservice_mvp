import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MusicPlayerContext } from '../../appContext'
import Technology from '../Technology/Technology'
import Application from '../Application/Application'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: '100%',
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {

  const [state, ] = useContext(MusicPlayerContext);



  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        {state.userRole === "IT User" &&  <Tab label="Technology" {...a11yProps(0)} /> }
        {state.userRole === "Business User" &&  <Tab label="Applications" {...a11yProps(0)} /> }
        <Tab label="Data Center" {...a11yProps(2)} />
        <Tab label="Architecture" {...a11yProps(3)} />
        <Tab label="Best Practices" {...a11yProps(4)} />

      </Tabs>
    {state.userRole === "IT User" &&   <TabPanel value={value} index={0}>
      <Technology />
      </TabPanel> }
      {state.userRole === "Business User" &&  <TabPanel value={value} index={state.userRole === "Business User" ? 0 : 1}>
        <Application />
      </TabPanel>}
    </div>
  );
}


//export default TabPanel