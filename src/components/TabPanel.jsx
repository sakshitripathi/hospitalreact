import React from "react";
import PropTypes from "prop-types";
import {makeStyles, responsiveFontSizes} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import SearchIcon from "@material-ui/icons/Search";
import {Autorenew, CenterFocusStrong} from "@material-ui/icons";
import clsx from "clsx";
//import Collapse from '@material-ui/core/Collapse';
import IconButton from "@material-ui/core/IconButton";
import {blueGrey, green, red} from "@material-ui/core/colors";
import InputBase from "@material-ui/core/InputBase";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import {lightGreen} from "@material-ui/core/colors";
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },

  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },
  medium: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  lightGreen: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div style={{width: "100%", display: "table"}}>
        <div style={{display: "table-row", height: "35px"}}>
          <div style={{width: "10%", display: "table-cell", border: "6px"}}>
            <img src="/assets/logo.png" alt=" xyz" />
          </div>
          <div
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: "11.5px",
              width: "6%",
              display: "table-cell",
              backgroundColor: "#66A3FF",
            }}
          >
            <span style={{color: "white"}}>
              <b>PATIENTS</b>
            </span>
          </div>
          <div
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: "11.5px",
              width: "6%",
              display: "table-cell",
            }}
          >
            <b> CALENDAR</b>
          </div>
          <div
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: "11.5px",
              width: "6%",
              display: "table-cell",
            }}
          >
            <b> USERS</b>
          </div>
          <div
            style={{
              textAlign: "center",
              verticalAlign: "middle",
              fontSize: "11.5px",
              width: "6%",
              display: "table-cell",
            }}
          >
            <b> BILLING</b>
          </div>
          <div style={{width: "57%", display: "table-cell"}}></div>
          <div
            style={{
              width: "3%",
              display: "table-cell",
              verticalAlign: "middle",
            }}
          >
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent=" "
              overlap="circle"
              variant="dot"
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          </div>
          <div
            style={{
              width: "3%",
              display: "table-cell",
              verticalAlign: "middle",
            }}
          >
            <Avatar 
              alt="Remy Sharp"
              src="/assets/sakshi.jpg"
              className={classes.small}
            />
          </div>
        </div>
      </div>
      <div style={{display: "table", width: "100%"}}>
        <div style={{display: "table-row"}}>
          <div
            style={{
              width: "100%",
              display: "table-cell",
              height: "10px",
              backgroundColor: "#E0E0D1",
            }}
          ></div>
        </div>
      </div>
      <div style={{display: "table", width: "100%"}}>
        <div
          style={{
            display: "table-row",
            width: "100%",
            height: "400px",
          }}
        >
          <div
            style={{
              display: "table-cell",
              width: "16.5%",
              
              backgroundColor: "#e6faff",
            }}
          >
            <div style={{display: "table", width: "100%", height: "100%"}}>
              <div style={{paddingLeft: "10px"}}>
                <b>Patients</b>
              </div>
              <br style={{lineHeight: "3px"}} />
              <div style={{paddingLeft: "10px"}} className={classes.search}>
                
                <InputBase
                  style={{
                    fontSize: "12px",
                    backgroundColor: "white",
                    width: "85%",
                    margin: "auto",
                    paddingLeft: "8px",
                    paddingTop: "8px",
                  }}
                  placeholder="Search Patient"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{"aria-label": "search"}}
                /><SearchIcon
                style={{float: "right", backgroundColor: "white",marginBottom:"1px"}}
              />
              </div>
              <br style={{lineHeight: "3px"}} />
              <div style={{}}>
                <Card
                  style={{
                    backgroundColor: "#66A3FF",
                    width: "92%",
                    margin: "auto",
                    borderRadius: "2px",

                    paddingLeft: "9px",
                    paddingTop: "8px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/remy.jpg"
                    style={{float: "left"}}
                  />
                  <center>
                    <b>
                      <font style={{fontSize: "12px", color: "white",paddingRight:"18px"}}>
                        Remy Sharp
                      </font>
                    </b>
                    <br style={{lineHeight: "5px"}} />
                    <FiberManualRecordIcon
                      style={{
                        float: "right",
                        height: "15px",
                        marginRight: "8px",
                        marginBottom: "11px",
                        fill: "green",
                      }}
                    ></FiberManualRecordIcon>
                    <font style={{fontSize: "10px", color: "white"}}>
                      15 Aug 2020
                    </font>
                  </center>
                </Card>
              </div>
              <br style={{lineHeight: "1px"}} />
              <div style={{}}>
                <Card
                  variant="inlined"
                  style={{
                    backgroundColor: "white",
                    width: "92%",
                    margin: "auto",
                    borderRadius: "2px",
                    paddingLeft: "9px",
                    paddingTop: "8px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/sakshi.jpg"
                    style={{float: "left"}}
                  />
                  <center>
                    <b>
                      <font style={{fontSize: "12px", color: "black",paddingRight:"15px"}}>
                        Sakshi Tripathi
                      </font>
                    </b>
                    <br style={{lineHeight: "5px"}} />
                    <FiberManualRecordIcon
                      style={{
                        float: "right",
                        height: "15px",
                        marginRight: "5px",
                        marginBottom: "11px",
                        fill: "red",
                      }}
                    ></FiberManualRecordIcon>
                    <font style={{fontSize: "10px", color: "grey"}}>
                      No Clearance
                    </font>
                  </center>
                </Card>
              </div>

              <br style={{lineHeight: "1px"}} />

              <div>
                <Card
                  variant="inlined"
                  style={{
                    backgroundColor: "white",
                    width: "92%",
                    margin: "auto",
                    borderRadius: "2px",
                    paddingLeft: "9px",
                    paddingTop: "8px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/charlie.jpg"
                    style={{float: "left"}}
                  />
                  <center>
                    <b>
                      <font style={{fontSize: "12px", color: "black",paddingRight:"15px"}}>
                        Charlie Puth
                      </font>
                    </b>
                    <br style={{lineHeight: "5px"}} />
                    <FiberManualRecordIcon
                      style={{
                        float: "right",
                        height: "15px",
                        marginRight: "5px",
                        marginBottom: "11px",
                        fill: "green",
                      }}
                    ></FiberManualRecordIcon>
                    <font style={{fontSize: "10px", color: "grey"}}>
                      10 Sept 2020
                    </font>
                  </center>
                </Card>
              </div>
              <br style={{lineHeight: "1px"}} />
              <div style={{}}>
                <Card
                  variant="inlined"
                  style={{
                    backgroundColor: "white",
                    width: "92%",
                    margin: "auto",
                    borderRadius: "2px",
                    paddingLeft: "9px",
                    paddingTop: "8px",
                  }}
                >
                  <Avatar
                    alt="Remy Sharp"
                    src="/assets/taylor.jpg"
                    style={{float: "left"}}
                  />
                  <center>
                    <b>
                      <font style={{fontSize: "12px", color: "black",paddingRight:"15px"}}>
                        Taylor Swift
                      </font>
                    </b>
                    <br style={{lineHeight: "5px"}} />
                    <FiberManualRecordIcon
                      style={{
                        float: "right",
                        height: "15px",
                        marginRight: "5px",
                        marginBottom: "11px",
                        fill: "green",
                      }}
                    ></FiberManualRecordIcon>
                    <font style={{fontSize: "10px", color: "grey",verticalAlign:"middle"}}>
                    20 Oct 2020 
                    </font>
                  </center>
                </Card>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "table-cell",
              height: "100%",
              backgroundColor: "#f5f5f0",
            }}
          >
            <div width="40%" backgroundColor="grey">
              <div style={{marginLeft: "34px", marginTop: "15px"}}>
                <b>Patient Information</b>
                <MoreHorizIcon
                  style={{
                    paddingTop: "5px",
                    float: "right",
                    marginLeft: "-20px",
                    marginRight: "13px",
                    fontSize: "28px",
                    marginBottom: "3px",
                    color: "grey",
                  }}
                />
                <font
                  style={{
                    fontSize: "11px",
                    color: "blueGrey",
                    float: "right",
                    marginTop: "10px",
                    marginRight: "30px",
                  }}
                >
                  <b>:10:25 AM,today</b>
                </font>
                <font
                  style={{
                    fontSize: "11px",
                    color: "grey",
                    float: "right",
                    marginTop: "10px",
                  }}
                >
                  <b>Last Updated</b>
                </font>
              </div>

              <div
                style={{display: "table-cell", margin: "auto"  , width: "12%"}}
              >
                <center>
                  <Avatar
                    alt="remy sharp"
                    src="/assets/remy.jpg"
                    className={classes.large}
                    style={{
                      verticalAlign: "left",
                      
                      marginTop: "25px",
                      marginLeft: "30px",
                      marginTop: "15px",
                      marginRight: "20px",
                    }}
                  ></Avatar>
                </center>
                </div>

              <div
                style={{
                  display: "table-cell",
                  width: "15%",
                  paddingRight: "30px",
                  paddingBottom:"20px",
                  
                }}
              > <div style={{height:"15px",paddingBottom:"25px"}}> <b><h3>Remy Sharp</h3></b></div>
                <div style={{display: "table-row"}}>
                  <div style={{display: "table-cell", paddingRight: "25px"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Phone:
                    </font>
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>302-857-9685</b>
                    </font>
                  </div>
                </div>
                <div
                  style={{
                    display: "table-row",
                    margin: "auto",
                    borderRightWidth: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Email:
                    </font>
                  </div>
                  <div
                    borderRightWidth="20px"
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginRight: "25px",
                      borderRightWidth: "20px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>remysharp@gmail.com</b>
                    </font>
                  </div>
                </div>

                <div width="20%" style={{display: "table-row", margin: "auto"}}>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Gender:
                    </font>
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginRight: "25px",
                      borderRightWidth: "20px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>Male</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Age:
                    </font>
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      marginTop: "20px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>45</b>
                    </font>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "table-cell",
                  margin: "auto",
                  width: "21%",
                  paddingRight: "20px",
                }}
              >
                <div style={{display: "table-row", margin: "auto"}}>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      paddingRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Surgery Type:
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>Rotator Cuff Repair</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Surgery Date:
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>15 Aug 2020</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Height(cm):
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>163</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Weight(lb):
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>110</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      BMI:
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>19</b>
                    </font>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "table-cell",
                  margin: "auto",
                  width: "30%",
                  paddingLeft: "20px",
                }}
              >
                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", paddingRight: "25px"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Anesthesiologist:
                    </font>
                  </div>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      paddingRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>Dr.Christina Hardaway</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div
                    style={{
                      display: "table-cell",
                      margin: "auto",
                      paddingRight: "25px",
                    }}
                  >
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Anesthesiologist Phone:
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>301-896-8745</b>
                    </font>
                  </div>
                </div>

                <div style={{display: "table-row", margin: "auto"}}>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "#595959"}}>
                      Anesthesiologist Email:
                    </font>
                  </div>
                  <div style={{display: "table-cell", margin: "auto"}}>
                    <font style={{fontSize: "12px", color: "black"}}>
                      <b>christina@h3a.com</b>
                    </font>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "table-cell",
                  margin: "auto",
                  width: "14%",
                  paddingLeft: "20px",
                }}
              >
                <center>
                  <font style={{fontSize: "13px", color: "#595959"}}>
                    Surgery Clearance
                  </font>
                </center>

                <center>
                  <Avatar
                    className={classes.medium}
                    style={{backgroundColor: "green", marginTop: "10px"}}
                  >
                    Yes
                  </Avatar>
                </center>
              </div>
            </div>
            <div
              style={{display: "table-row", width: "100%", height: "32px"}}
            ></div>
            <div style={{display: "table", width: "100%", height: "9%"}}>
              <div
                style={{
                  display: "table-row",
                  height: "90%",
                  marginBottom: "10px",
                  borderBottomColor:"#f5f5f0",
                  borderBottomWidth:"3px"

                }}
              >
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "whiteSmoke",
                    width: "3%",
                    
                  }}
                ></div>
                
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "white",
                    width: "10%",
                    textAlign: "center",
                    verticalAlign: "middle",
                    borderRightColor:"grey"
                  }}
                >
                  <font
                    style={{
                      color: "#4db8ff",
                      fontSize: "12px",
                      float: "middle",
                    }}
                  >
                    <b>List of prior</b>
                    <br></br> <b>Surgeries</b>
                  </font>
                </div>
                <div width="0.5%" backgroundColor="grey"></div>
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "white",
                    width: "10%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <font style={{color: "#595959", fontSize: "12px"}}>
                    <b>List of Medical</b>
                    <br></br>
                    <b>Diagnosis</b>
                  </font>
                </div>
                <div width="0.2%" backgroundColor="grey"></div>
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "white",
                    width: "10%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <font style={{color: "#595959", fontSize: "12px"}}>
                    <b>List of</b>
                    <br></br>
                    <b>Medications</b>
                  </font>
                </div>
                <div width="0.2%" backgroundColor="grey"></div>
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "white",
                    width: "10%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <font style={{color: "#595959", fontSize: "12px"}}>
                    <b>Airway</b>
                    <br></br>
                    <b>Evaluation</b>
                  </font>
                </div>
                <div width="0.2%" backgroundColor="grey"></div>
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "white",
                    width: "12%",
                    textAlign: "center",
                    verticalAlign: "middle",
                  }}
                >
                  <font style={{color: "#595959", fontSize: "12px"}}>
                    <b>Anesthesia Clearance and</b>
                    <br></br>
                    <b>Recommendation</b>
                  </font>
                </div>
                <div width="0.2%" backgroundColor="black"></div>
                <div
                  style={{
                    display: "table-cell",
                    backgroundColor: "#f5f5f0",
                    width: "47%",
                  }}
                ></div>
              </div>
            </div>
            <div style={{height:'40px', backgroundColor:"white"}}/>
            <div
              style={{
                backgroundColor: "white",height:"100%"
              }}
            > <div style={{display: "table-cell", width: "50px"}}></div>
              <div style={{display: "table-cell", width: '430px'}}>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#e6faff",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                 <font style={{fontSize:"12px"}}><b>First Time Surgery</b></font> 
                </div>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#f5f5f0",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                  <font style={{fontSize:"12px"}}><b>No</b></font>
                </div>
                <br></br>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#e6faff",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                  <font style={{fontSize:"12px"}}><b>Family History of Surgical Complications</b></font>
                </div>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#f5f5f0",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                 <font style={{fontSize:"12px"}}><b>Yes</b></font>
                </div>
                <br></br>
                <div
                  style={{
                    height: "30px",
                    backgroundColor: "#e6faff",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                  <font style={{fontSize:"12px"}}><b>If Yes, Please Provide more Details</b></font>
                </div>
                <div
                  style={{
                    height: "70px",
                    backgroundColor: "#f5f5f0",
                    paddingTop:"4px",
                    paddingLeft:"10px"
                  }}
                >
                 <font style={{fontSize:"12px"}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris </b></font> 
                </div>
              </div>
              
              <div style={{backgroundColor:"white",height:"40px",width:"100%",paddingTop:"25px"}}><font style={{fontSize:"13px",color:"grey",paddingLeft:"50px"}}><b>Previous Surgeries</b></font></div>
              <div style={{display:"table",margin:"20px",paddingLeft:"26px"}}>
              <div style= {{display:"table-row",backgroundColor: "#e6faff",height: "40px"}}>
                  <div style={{paddingTop:"20px",display:"table-cell"}}><font style={{fontSize:"12px"}}><b>Surgery Type</b></font></div>
                  <div style={{display:"table-cell",paddingLeft:"30px",paddingRight:"90px"}}><font style={{fontSize:"12px"}}><b>Date</b></font></div>
                  <div style={{display:"table-cell",paddingLeft:"40px"}}><font style={{fontSize:"12px"}}><b>Anesthesia Type</b></font></div>
                  <div style={{display:"table-cell",paddingRight:"70px"}}><font style={{fontSize:"12px"}}><b>Surgical Complications</b></font></div>
                  <div style={{display:"table-cell",paddingRight:"30px",paddingLeft:"30px"}}><font style={{fontSize:"12px"}}><b>Anesthesic Complications (nausea,<br></br>vomiting,difficult intubation)</b></font></div>
                  <div style={{display:"table-cell"}}></div>
                  <div style={{display:"table-cell"}}></div>
              </div>
              <div style= {{display:"table-row",backgroundColor: "#f5f5f0",height: "40px",}}>
              <div style={{display:"table-cell",paddingRight:"40px"}}><font style={{fontSize:"12px"}}>Shoulder reconstruction</font></div>
               <div style={{display:"table-cell",paddingLeft:"30px"}}><font style={{fontSize:"12px"}}>January 2008</font></div>
                  <div style={{display:"table-cell",paddingLeft:"40px",paddingRight:"60px"}}><font style={{fontSize:"12px"}}>General"Breathing Tube"</font></div>
                  <div style={{display:"table-cell",paddingRight:"40px"}}><font style={{fontSize:"12px"}}>No</font></div>
                  <div style={{display:"table-cell",paddingRight:"30px",paddingLeft:"30px"}}><font style={{fontSize:"12px"}}>No</font></div>
                <div style={{display:"table-cell",paddingLeft:"50px",paddingRight:"10px"}}><DeleteIcon fontSize="small" style={{color:"grey"}}></DeleteIcon></div>
             <div style={{display:"table-cell",paddingRight:"40px"}}><center><CreateIcon fontSize="small" style={{color:"grey"}}></CreateIcon></center></div> 
              </div></div>
              <br></br>
             <div style={{display:"table-cell",paddingLeft:"43px"}}> <card style={{backgroundColor:"#00b8e6",paddingTop:"15px",paddingLeft:"16px",paddingRight:"17px",paddingBottom:"13px"}}>
  <font style={{fontSize:"13px",color:"white"}}>+ Add Surgery</font>
</card> </div>
    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
