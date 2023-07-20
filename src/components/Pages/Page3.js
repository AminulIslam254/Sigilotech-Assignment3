import { Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addOnsSetup } from '../../redux/actions/ProductActions';

const Page3 = () => {

  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const [yearlyToggle, setYearlyToggle] = useState("");

  useEffect(() => {
    setYearlyToggle(products.allProducts.yearlyToggle);
  }, [products.allProducts.yearlyToggle])
  



  const onCheckChange = (e) => {
    let payload={id:e.target.id,name:"",money:""};
    if(e.target.id==="1"){
      payload.id="1";
      payload.name="Online service";
      payload.money=(yearlyToggle) ? "10" : "1";
    }
    else if(e.target.id==="2" && e.target.checked){
      payload.id="2";
      payload.name="Larger storage";
      payload.money=(yearlyToggle) ? "20" : "2";
    }
    else if(e.target.id==="3" && e.target.checked){
      payload.id="3";
      payload.name="Customizable Profile";
      payload.money=(yearlyToggle) ? "20" : "2";
    }
    
      dispatch(addOnsSetup(payload));
    
    
  }

  return (
    <>
      <div>
        <h1 style={{ margin: 0, marginBottom: 10 }}>Pick add-ons</h1>
        <span style={{ color: "grey" }}>Add-ons help enhance your gaming experience</span>
      </div>
      <div style={{ marginTop: 15, height: "20%", width: "95%" }}>

        <div style={{ height: "75%", width: "95%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "center", borderRadius: 5 }}>
          <div style={{ width: "85%", display: "flex", alignItems: "center", flexDirection: "row",justifyContent:"space-between" }}>
            <div style={{ width: "54%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
              <Checkbox id='1' onChange={onCheckChange} />
              <div style={{ height: "62%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 9 }}>
                <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Online Service</p>
                <p style={{ fontSize: 12, color: "gray", margin: 0 }}>Access to multiplayer games</p>
              </div>
            </div>
            <div>
              <p>+${(yearlyToggle) ? "10" : "1"}/{(yearlyToggle) ? "yr" : "mo"}</p>
            </div>

          </div>

        </div>


      </div>
      <div style={{ marginTop: 15, height: "20%", width: "95%" }}>

        <div style={{ height: "75%", width: "95%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "center", borderRadius: 5 }}>
          <div style={{ width: "85%", display: "flex", alignItems: "center", flexDirection: "row",justifyContent:"space-between" }}>
            <div style={{ width: "46%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
              <Checkbox id='2' onChange={onCheckChange} />
              <div style={{ height: "62%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 9 }}>
                <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Larger Storage</p>
                <p style={{ fontSize: 12, color: "gray", margin: 0 }}>Extra 1TB of cloud save</p>
              </div>
            </div>
            <div>
            <p>+${(yearlyToggle) ? "20" : "2"}/{(yearlyToggle) ? "yr" : "mo"}</p>
            </div>

          </div>

        </div>


      </div>
      <div style={{ marginTop: 15, height: "20%", width: "95%" }}>

        <div style={{ height: "75%", width: "95%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "center", borderRadius: 5 }}>
          <div style={{ width: "85%", display: "flex", alignItems: "center", flexDirection: "row",justifyContent:"space-between" }}>
            <div style={{ width: "56%", border: "1px solid", display: "flex", flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
              <Checkbox id='3' onChange={onCheckChange} />
              <div style={{ height: "62%", display: "flex", flexDirection: "column", justifyContent: "space-between", marginTop: 9 }}>
                <p style={{ fontSize: 13, fontWeight: "bold", margin: 0 }}>Customizable profile</p>
                <p style={{ fontSize: 12, color: "gray", margin: 0 }}>Custom theme on your profile</p>
              </div>
            </div>
            <div>
            <p>+${(yearlyToggle) ? "20" : "2"}/{(yearlyToggle) ? "yr" : "mo"}</p>
            </div>

          </div>

        </div>


      </div>

    </>
  )
}

export default Page3