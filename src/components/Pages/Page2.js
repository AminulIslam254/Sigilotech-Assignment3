import { Switch } from 'antd'
import React, { useEffect, useState } from 'react';
import icon1 from "../../assests/icon-arcade.svg";
import icon2 from "../../assests/icon-advanced.svg";
import icon3 from "../../assests/icon-pro.svg";
import { makeStyles } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { setYearlyToggle, userPlanSetup } from '../../redux/actions/ProductActions';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  '@media (min-width: 780px)': {
    width: '80%'
  },

  box1: {
    '&:hover': {
      cursor: "pointer",
      border: "1px solid black !important"
    },
    '@media (max-width: 780px)': {
      width:"95% !important",
      height:"22% !important",
      display:"flex"
   }
   
  },
  box1ItemsDiv:{
    '@media (max-width: 780px)': {
      height:"52px !important",
   }
  },
  mainBox1Div1:{
    '@media (max-width: 780px)': {
      height:"126%"
   }
  },
  toggle1:{
    '@media (max-width: 780px)': {
      alignItems:"normal !important"
   }
  },
  toggle1Div1:{
    '@media (max-width: 780px)': {
      width:"80% !important"
   }
  },
  beforeToggle1Div:{
    '@media (max-width: 780px)': {
      height:"35% !important"
   }
  },



}));



const Page2 = () => {

  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();





  const classes = useStyles();

  const [toggle, setToggle] = useState(false);

  const [activeBox, setActiveBox] = useState([0, 0, 0]);


  const handleToggleChange = (checked) => {
    setToggle(checked);
    dispatch(setYearlyToggle(checked));
  }

  useEffect(() => {
    let payload = {};
    if (activeBox[0] === true) {
      payload.planName = "Arcade";
      payload.duration = (toggle) ? "Yearly" : "Monthly";
      payload.price = (toggle) ? "90" : "9";

    }
    else if (activeBox[1] === true) {
      payload.planName = "Advanced";
      payload.duration = (toggle) ? "Yearly" : "Monthly";
      payload.price = (toggle) ? "120" : "12";

    }
    else if (activeBox[2] === true) {
      payload["planName"] = "Pro";
      payload["duration"] = (toggle) ? "Yearly" : "Monthly";
      payload["price"] = (toggle) ? "150" : "15";

    }

    dispatch(userPlanSetup(payload))
  }, [activeBox, toggle])






  return (
    <>
      <div>
        <h1 style={{ margin: 0, marginBottom: 10 }}>Select your plan</h1>
        <span style={{ color: "grey" }}>You have the option of monthly and yearly billing</span>
      </div>
      <div style={{ marginTop: 15 }}>

        <div className={classes.mainBox1Div1} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly",flexWrap:"wrap" }}>
          <div className={classes.box1} onClick={() => {
            setActiveBox((prevProps) => {
              let currProps = { ...prevProps };
              currProps[0] = !currProps[0];
              currProps[1] = 0;
              currProps[2] = 0;
              return currProps;
            })
          }} style={{ border: `1px solid ${(!activeBox[0]) ? "gray" : "black"}`, height: 148, width: 121, borderRadius: 10,display:"flex",flexWrap:"wrap" }}>
            <div style={{ height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ height: 30, width: 30 }} src={icon1} />
            </div>
            <div className={classes.box1ItemsDiv} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 82, width: 69, alignItems: "flex-start", marginLeft: 10 }}>
              <p style={{ margin: 0, fontWeight: 'bold', marginBottom: 5 }}>Arcade</p>
              <p style={{ margin: 0, fontSize: 13, color: "gray", marginBottom: 5 }}>${(toggle) ? "90" : "9"}/{(toggle) ? "yr" : "mo"}</p>
              <p style={{ display: (toggle) ? "block" : "none", margin: 0, fontSize: 10 }}>2 months free</p>
            </div>
          </div>
          <div className={classes.box1} onClick={() => {
            setActiveBox((prevProps) => {
              let currProps = { ...prevProps };
              currProps[1] = !currProps[1];
              currProps[0] = 0;
              currProps[2] = 0;
              return currProps;
            })
          }} style={{ border: `1px solid ${(!activeBox[1]) ? "gray" : "black"}`, height: 148, width: 121, borderRadius: 10 }}>
            <div style={{ height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ height: 30, width: 30 }} src={icon2} />
            </div>
            <div className={classes.box1ItemsDiv} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 82, width: 69, alignItems: "flex-start", marginLeft: 10 }}>
              <p style={{ margin: 0, fontWeight: 'bold', marginBottom: 5 }}>Advanced</p>
              <p style={{ margin: 0, fontSize: 13, color: "gray", marginBottom: 5 }}>${(toggle) ? "120" : "12"}/{(toggle) ? "yr" : "mo"}</p>
              <p style={{ display: (toggle) ? "block" : "none", margin: 0, fontSize: 10 }}>2 months free</p>
            </div>
          </div>
          <div className={classes.box1} onClick={() => {
            setActiveBox((prevProps) => {
              let currProps = { ...prevProps };
              currProps[2] = !currProps[2];
              currProps[1] = 0;
              currProps[0] = 0;
              return currProps;
            })
          }} style={{ border: `1px solid ${(!activeBox[2]) ? "gray" : "black"}`, height: 148, width: 121, borderRadius: 10 }}>
            <div style={{ height: 50, width: 50, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img style={{ height: 30, width: 30 }} src={icon3} />
            </div>
            <div className={classes.box1ItemsDiv} style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: 82, width: 69, alignItems: "flex-start", marginLeft: 10 }}>
              <p style={{ margin: 0, fontWeight: 'bold', marginBottom: 5 }}>Pro</p>
              <p style={{ margin: 0, fontSize: 13, color: "gray", marginBottom: 5 }}>${(toggle) ? "150" : "15"}/{(toggle) ? "yr" : "mo"}</p>
              <p style={{ display: (toggle) ? "block" : "none", margin: 0, fontSize: 10 }}>2 months free</p>
            </div>
          </div>
        </div>
        <div className={classes.beforeToggle1Div} style={{ height: "40%", display: "flex", justifyContent: "center", alignItems: "center" }}>

          <div className={classes.toggle1} style={{ backgroundColor: "pink", width: "80%", height: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>

            <div className={classes.toggle1Div1}  style={{ width: "45%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ fontSize: 12, fontWeight: "bold" }}>Monthly</p>
              <Switch checked={products.allProducts.yearlyToggle} onChange={handleToggleChange} />
              <p style={{ fontSize: 12, fontWeight: "bold" }}>Yearly</p>
            </div>

          </div>


        </div>



      </div>

    </>
  )
}

export default Page2