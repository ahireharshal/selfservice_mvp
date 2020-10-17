import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './AppTab.css'

import Redis from './redis'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
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
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="" color="">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
         
         
         <Tab label="Redis" icon={<i class="devicon-redis-plain-wordmark  colored icon-size "></i>} {...a11yProps(0)} />
      

         <Tab label="Github" icon={<i class="devicon-github-plain-wordmark colored icon-size "></i>} {...a11yProps(0)} />


         <Tab label="BitBucket" icon={<i class="devicon-bitbucket-plain-wordmark colored icon-size "></i>} {...a11yProps(0)} />



         <Tab label="Visual Studio" icon={<i class="devicon-visualstudio-plain colored icon-size "></i>} {...a11yProps(0)} />

         <Tab label="Tomcat" icon={<i class="devicon-tomcat-line-wordmark colored icon-size "></i>} {...a11yProps(0)} />

         <Tab label="Redhat" icon={<i class="devicon-redhat-plain-wordmark colored icon-size "></i>} {...a11yProps(0)} />


         <Tab label="AWS" icon={<i class="devicon-amazonwebservices-plain-wordmark colored icon-size "></i>} {...a11yProps(0)} />


        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>


<Redis />
      </TabPanel>

    </div>
  );
}
