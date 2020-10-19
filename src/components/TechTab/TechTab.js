import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './TechTab.css'

import Nodejs from './Nodejs'

import AngularJS from './Angularjs'


import Postgres from './Postgres'

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
         
         


         

         <Tab label="PostgreSQL" icon={<i class="devicon-postgresql-plain colored icon-size"></i>} {...a11yProps(0)} />

         <Tab label="Nodejs" icon={<i class="devicon-nodejs-plain colored icon-size "></i>} {...a11yProps(0)} />
         
          <Tab label="AngularJs" icon={<i class="devicon-angularjs-plain colored icon-size"></i>} {...a11yProps(1)} />
          <Tab label="Csharp" icon={<i class="devicon-csharp-plain colored icon-size"></i>} {...a11yProps(2)} />
          <Tab label="Css3" icon={<i class="devicon-css3-plain colored icon-size"></i>} {...a11yProps(3)} />
          <Tab label="dcoker" icon={<i class="devicon-docker-plain-wordmark colored icon-size"></i>} {...a11yProps(4)} />
          <Tab label="Go" icon={<i class="devicon-go-plain colored icon-size"></i>} {...a11yProps(5)} />
          <Tab label="Javascript" icon={<i class="devicon-javascript-plain colored icon-size"></i>} {...a11yProps(6)} />

          <Tab label="Redhat" icon={<i class="devicon-redhat-plain colored colored icon-size"></i>} {...a11yProps(6)} />


          <Tab label="Ruby" icon={<i class="devicon-ruby-plain colored icon-size"></i>} {...a11yProps(6)} />


          <Tab label="typescript" icon={<i class="devicon-typescript-plain colored icon-size"></i>} {...a11yProps(6)} />


          <Tab label="vim" icon={<i class="devicon-vim-plain colored icon-size"></i>} {...a11yProps(6)} />


          <Tab label="redis" icon={<i class="devicon-redis-plain colored icon-size"></i>} {...a11yProps(6)} />

        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>


    <Postgres />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Nodejs />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <AngularJS />
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
