import React, { useState } from 'react';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import FinishPage from './Pages/FinishPage';

import leftImage from '../assests/bg-sidebar-desktop.svg'
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    '@media (min-width: 780px)': {
        alignItems:"normal"
        
    },

    button1: {
        '&:hover': {
            cursor: "pointer",
        },
    },

    box1:{
        '@media (max-width: 780px)': {
            alignItems:"normal !important",
            flexWrap:"wrap",
            flexDirection:"row"
        },
    },
    leftImgMainBox1:{
        '@media (max-width: 780px)': {
           width:"95% !important",
           height:"22% !important"
        },
    },
    leftImgMainBox1div1:{
        '@media (max-width: 780px)': {
            width:"86% !important",
            // height:"22% !important"
         },
    },
    leftImgMainBox1div1Texts:{
        '@media (max-width: 780px)': {
            display:"none !important"
         },
    },
    box1Div1Div1:{
        '@media (max-width: 780px)': {
            flexDirection:"row !important",
            alignItems:"center"
         },
    },
    buttonMainDiv:{
        '@media (max-width: 780px)': {
            height:"363% !important"
         },
    }


    







}));




const Home = () => {


    const classes = useStyles();

    const navigate = useNavigate();


    let Components = [
        {
            key: 0,
            Components: <Page1 />
        },
        {
            key: 1,
            Components: <Page2 />
        },
        {
            key: 2,
            Components: <Page3 />
        },
        {
            key: 3,
            Components: <Page4 />
        },
        {
            key: 4,
            Components: <FinishPage />
        },
    ]

    const [pageNo, setPageNo] = useState(0);


    return (
        <>
            <div className={classes.box1} style={{ height: 636, width: "100%", display: "flex", justifyContent: "center", alignItems: "center",  backgroundColor: "#f3eee9" }}>

                <div className={classes.leftImgMainBox1} style={{  height: "70%", width: "57%", backgroundColor: "rgb(243, 238, 233)", display: "flex", justifyContent: "center", alignItems: "center" }}>

                    <div className={classes.box1} style={{ height: "95%", width: "95%", display: "flex", flexDirection: "row" }}>
                        <div className={classes.leftImgMainBox1div1}  style={{ height: "99%", width: "30%", backgroundImage: `url(${leftImage})`, border: "2px solid green", borderRadius: 5, backgroundSize: "cover" }}>
                            <div className={classes.box1Div1Div1} style={{ height: "70%", width: "100%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", }}>
                                <div style={{ height: "25%", width: "59%", display: "flex", flexDirection: "row",  alignItems: "center",justifyContent:"space-around" }}>
                                    <div style={{
                                        borderRadius: 25, border: `1px solid ${(pageNo === 0) ? "transparent" : "white"}`, height: 30, width: 30, display: "flex",
                                        justifyContent: "center", alignItems: "center", backgroundColor: `${(pageNo === 0) ? "white" : "transparent"}`,
                                        color:(pageNo === 0) ? "black" : "white"

                                    }}>1</div>
                                    <div className={classes.leftImgMainBox1div1Texts} style={{ height: "100%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ height: 35, width:"100%", display: "flex"}}>
                                            <h5 style={{ color: "gray" }}>STEP 1</h5>
                                        </div>
                                        <div style={{ height: 35,width:"100%",  display: "flex", alignItems: "flex-end",marginTop:5 }}>
                                            <h5 style={{ color: "white" }}>YOUR INFO</h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "25%", width: "66%", display: "flex", flexDirection: "row",  alignItems: "center",justifyContent:"space-around" }}>
                                    <div style={{
                                        borderRadius: 25, border: `1px solid ${(pageNo === 1) ? "transparent" : "white"}`, height: 30, width: 30, display: "flex",
                                        justifyContent: "center", alignItems: "center", backgroundColor: `${(pageNo === 1) ? "white" : "transparent"}`,
                                        color:(pageNo === 1) ? "black" : "white"

                                    }}>2</div>
                                    <div className={classes.leftImgMainBox1div1Texts} style={{ height: "100%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ height: 35,width:"100%",  display: "flex",}}>
                                            <h5 style={{ color: "gray",textAlign:"left" }}>STEP 2</h5>
                                        </div>
                                        <div style={{ height: 35,width:"100%",  display: "flex", alignItems: "flex-end",marginTop:5,justifyContent:"flex-start" }}>
                                            <h5 style={{ color: "white" }}>SELECT PLAN</h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "25%", width: "59%", display: "flex", flexDirection: "row",  alignItems: "center",justifyContent:"space-around" }}>
                                    <div style={{
                                        borderRadius: 25, border: `1px solid ${(pageNo === 2) ? "transparent" : "white"}`, height: 30, width: 30, display: "flex",
                                        justifyContent: "center", alignItems: "center", backgroundColor: `${(pageNo === 2) ? "white" : "transparent"}`,
                                        color:(pageNo === 2) ? "black" : "white"

                                    }}>3</div>
                                    <div className={classes.leftImgMainBox1div1Texts} style={{ height: "100%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ height: 35, width:"100%", display: "flex"}}>
                                            <h5 style={{ color: "gray" }}>STEP 3</h5>
                                        </div>
                                        <div style={{ height: 35, width:"100%", display: "flex", alignItems: "flex-end",marginTop:5 }}>
                                            <h5 style={{ color: "white" }}>ADD-ONS</h5>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ height: "25%", width: "59%", display: "flex", flexDirection: "row",  alignItems: "center",justifyContent:"space-around" }}>
                                    <div style={{
                                        borderRadius: 25, border: `1px solid ${(pageNo === 3) ? "transparent" : "white"}`, height: 30, width: 30, display: "flex",
                                        justifyContent: "center", alignItems: "center", backgroundColor: `${(pageNo === 3) ? "white" : "transparent"}`,
                                        color:(pageNo === 3) ? "black" : "white"

                                    }}>4</div>
                                    <div className={classes.leftImgMainBox1div1Texts} style={{ height: "100%",  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                        <div style={{ height: 35,width:"100%",  display: "flex"}}>
                                            <h5 style={{ color: "gray" }}>STEP 4</h5>
                                        </div>
                                        <div style={{ height: 35,width:"100%",  display: "flex", alignItems: "flex-end",marginTop:5 }}>
                                            <h5 style={{ color: "white" }}>SUMMARY</h5>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        <div className={classes.buttonMainDiv}  style={{ height: "100%", width: "70%", display: "flex", alignItems: "flex-end", flexDirection: "column" }}>
                            <div style={{ width: "90%", height: "85%", display: "flex", justifyContent: "flex-start", flexDirection: "column" }}>
                                {Components[pageNo].Components}
                            </div>
                            <div style={{ width: "92%", height: "15%", display: (pageNo <= 3) ? "flex" : "none", justifyContent: "space-between", alignItems: "flex-end" }}>
                                <button className={classes.button1} style={{ visibility: (pageNo > 0) ? "visible" : "hidden", height: 40, width: 103, backgroundColor: "white", color: "black", borderRadius: 5, border: "1px solid white" }} onClick={() => { setPageNo(pageNo - 1) }}>Go Back</button>
                                <button className={classes.button1} style={{ display: (pageNo < 3) ? "block" : "none", height: 40, width: 103, backgroundColor: "#0c57f5", color: "white", borderRadius: 5 }} onClick={() => { setPageNo(pageNo + 1) }}>Next Step</button>
                                <button className={classes.button1} style={{ display: (pageNo === 3) ? "block" : "none", height: 40, width: 103, backgroundColor: "#0c57f5", color: "white", borderRadius: 5 }} onClick={() => { setPageNo(pageNo + 1) }}>Confirm</button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>



        </>
    )
}

export default Home