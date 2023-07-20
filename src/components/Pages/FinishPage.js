import React from 'react';
import iconThankYou from '../../assests/icon-thank-you.svg'

const FinishPage = () => {
  return (
    <>
    
    <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div style={{height:"100%",width:"80%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img src={iconThankYou} alt="" />
            </div>
            <div>
                <h1 style={{textAlign:"center"}}>Thank You</h1>
            </div>
            <div style={{textAlign:"center"}}>
            Thanks for confirming your subscription! We hope you have fun using our platform. If you ever 
            need support, please feel free to email us at support@loremgaming.com.
            </div>
        </div>
    </div>
    </>
  )
}

export default FinishPage