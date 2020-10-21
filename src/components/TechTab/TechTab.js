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


         <Tab label="" icon={<img src="./aws.png"  alt="aws" width="100px"/>} {...a11yProps(0)} />
          <Tab label="" icon={<img src="./Databricks.png"  alt="aws" width="100px"/>} {...a11yProps(2)} />
          <Tab label="" icon={<img src="./Qliksense.png"  alt="aws" width="100px"/>} {...a11yProps(3)} />
          <Tab label="" icon={<img src="./Apache_Spark.png"  alt="aws" width="100px"/>} {...a11yProps(4)} />
          <Tab label="" icon={<img src="./talend.png"  alt="aws" width="100px"/>} {...a11yProps(0)} />
          <Tab label="" icon={<img src="./snowflake.png"  alt="aws" width="100px"/>} {...a11yProps(0)} />
       
          <Tab label="" icon={<img src="./microstrategy.png"  alt="aws" width="100px"/>} {...a11yProps(1)} />
       
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
