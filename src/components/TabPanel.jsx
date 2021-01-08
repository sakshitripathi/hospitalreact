import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
                <div style={{ width: '100%', display: 'table'}}>
                    <div style={{ display: "table-row", height: '100px' }}>
                        <div style={{ width: '10%', display: 'table-cell', paddingTop: '10px' }}>
                            <img src='/assets/logo.png' alt=" xyz" />
                        </div>
                        <div style={{ display: 'table-cell', paddingTop: '20px' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">

                                <Tab label="PATIENT"{...a11yProps(0)} />
                                <Tab label="CALENDAR" {...a11yProps(1)} />
                                <Tab label="USERS" {...a11yProps(2)} />
                                <Tab label="BILLING" {...a11yProps(3)} />
                            </Tabs>
                        </div>
                        <div style={{ width: '2%', display: 'table-cell', paddingTop: '7px' }}>
                            <img src='/assets/bell.png' alt="abc" /></div>
                        <div style={{ width: '2%', display: 'table-cell', paddingTop: '10px', paddingBottom:'10px' }}><img src='/assets/login.PNG' alt="abc" /></div>
                    </div>
                </div>
            </AppBar>
            
            <TabPanel value={value} index={0}>
                Patients
      </TabPanel>
            <TabPanel value={value} index={1}>
                Calendar
      </TabPanel>
            <TabPanel value={value} index={2}>
                Users
      </TabPanel>
            <TabPanel value={value} index={3}>
                Billing
      </TabPanel>
        </div>
    );
}
