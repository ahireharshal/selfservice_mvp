import React,{useContext} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { MusicPlayerContext } from '../../appContext'

import RoadShowCard from '../RoadShowCard/RoadShowCard'
import Grid from '@material-ui/core/Grid';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {
    DataGrid,
} from "@material-ui/data-grid";

import { p_training_rows, n_training_rows, a_training_rows, training_cols } from '../Knowledge/training'

import './Knowledge.css'
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
    const classes = useStyles();
    const [value, setValue] = React.useState(0);



    const [state1, setState1] = useContext(MusicPlayerContext);


    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange2 = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };






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
                <Tab label="Trainings" {...a11yProps(0)} />
                <Tab label="Road Shows" {...a11yProps(1)} />
                <Tab label="Open Group Discussions" {...a11yProps(2)} />

            </Tabs>
            <TabPanel value={value} index={0}>
                <div>


                    <FormGroup row>
                        <FormControlLabel
                            control={<Switch checked={state.checkedA} onChange={handleChange2} name="checkedA" />}
                            label="Show External Trainings"
                        />
                    </FormGroup>


                </div>

{state.checkedA && state1.userRole === "Business User" && <><div>
                    <Typography variant="h6" gutterBottom>
                        <br></br>
                    Amazon Web Services (AWS), Valid for Business Users**
                     <br></br>
                    </Typography>
                </div>
                <div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={p_training_rows} columns={training_cols} pageSize={5} />
                    </div>
                </div></>
                }
               

               {state1.userRole === "IT User" && <><div>
                    <Typography variant="h6" gutterBottom>
                        <br></br>
                        <br></br>
                    Databricks, Valid for IT Users**
                     <br></br>
                    </Typography>
                </div>
                <div>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid rows={n_training_rows} columns={training_cols} pageSize={5} />
                    </div>
            </div></> }


            {state1.userRole === "IT User" && <><div>
                    <Typography variant="h6" gutterBottom>
                        <br></br>
                        <br></br>
                        Apache Spark, Valid for IT Users**
                     <br></br>
                    </Typography>
                </div>
                <div>
                    <div style={{ height: 300, width: '100%' }}>
                        <DataGrid rows={a_training_rows} columns={training_cols} pageSize={5} />
                    </div>
                </div></>}
            </TabPanel>
            <TabPanel value={value} index={2}>


            Coming Soon! 

            </TabPanel>



            <TabPanel value={value} index={1}>
                <div>
                    <Typography variant="h6" gutterBottom >
                   Road Shows
                     <br></br>
                    </Typography>

                    <Typography variant="h6" gutterBottom color="secondary" >
                        2020 Tour Events
                     <br></br>
                        <br></br>
                    </Typography>



                </div>

                <Grid container spacing={3}>
                    <Grid item xs={4} spacing={2}>
                        <div><RoadShowCard img="/r1.png" xtitle="Williamsburg, VA" /></div>

                    </Grid>
                    <Grid item xs={4} spacing={2}>
                        <div><RoadShowCard img="/r2.png" xtitle="Nashville, TN" /></div>

                    </Grid>
                    <Grid item xs={4} spacing={2}>
                        <div><RoadShowCard img="/r3.png" xtitle="
Boston, MA" /></div>

                    </Grid>

                </Grid>


            </TabPanel>

        </div>
    );
}


//export default TabPanel