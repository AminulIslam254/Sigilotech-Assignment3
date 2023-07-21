import { Checkbox } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Page4 = () => {

  //redux part
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  let [storeData, setStoreData] = useState(undefined);
  const [renderKey, setRenderKey] = useState(0);

  let [addOnsTotalPrice, setAddOnsTotalPrice] = useState(0);


  useEffect(() => {
    let myPrice=0;
    storeData && storeData.addOns.map((val,ind)=>{
      console.log("mone : ",val.money,ind)
      if(val.money!==undefined){
        myPrice+=parseInt(val.money);
      }
    })
    setAddOnsTotalPrice(myPrice);
    
  }, [storeData])
  

  
  


  useEffect(() => {
    setStoreData(products.allProducts);
    storeData = (products.allProducts);
    setRenderKey(Math.random());
    console.log(storeData)
  }, [])







  return (
    <>
      <div>
        <h1 style={{ margin: 0, marginBottom: 10 }}>Finishing Up</h1>
        <span style={{ color: "grey" }}>Double-check everything looks OK before confirming</span>
      </div>
      <div style={{ marginTop: 15, height: "80%", width: "95%", display: "flex", flexDirection: "column" }}>


        <div style={{ height: "25%", width: "100%", border: "1px solid", display: "flex", justifyContent: "space-between", flexDirection: "row" }} key={renderKey}>
          <div style={{ border: "1px solid", height: "100%", width: 200 }} >
            {
              (storeData !== undefined) ? (
                <>
                  <span>{storeData.userPlan.planName + "(" + storeData.userPlan.duration + ")"} </span>


                </>

              ) : (
                <></>
              )





            }
          </div>
          <div style={{ border: "1px solid", height: "100%", width: 80 }}>
            {
              (storeData !== undefined) ? (
                <>

                  <span>{"$" + (storeData.userPlan.price) + "/" + ((storeData.userPlan.duration === "Monthly") ? "mon" : "yr")}</span>


                </>

              ) : (
                <></>
              )





            }
          </div>
        </div>


        <div style={{ height: "50%", width: "100%" }} key={renderKey + 1}>
          {

            (storeData !== undefined) ? (
              storeData.addOns.map((val, ind, arr) => {
                return ((val.name !== undefined) &&
                  <div key={val.id} style={{ height: "30%", width: "100%", border: "1px solid blue", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <div style={{ border: "1px solid", height: "100%", width: 200 }}>
                      <span>{val.name}</span>
                    </div>
                    <div style={{ border: "1px solid", height: "100%", width: 81 }}>
                      <span>{"+$" + (val.money) + "/" + ((storeData.userPlan.duration === "Monthly") ? "mon" : "yr")}</span>
                      
                      
                    </div>
                  </div>
                )
              })
            ) : (
              <></>
            )

          }
        </div>


        <div style={{ height: "50%", width: "100%" }} key={renderKey + 2}>
          <div style={{ height: "30%", width: "100%", border: "1px solid blue", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            {
              (storeData !== undefined) ? (
                <>
                  <div style={{ border: "1px solid", height: "100%", width: 200 }}>
                    <span>Total (per {((storeData.userPlan.duration === "Monthly") ? "month" : "year")})</span>
                  </div>
                  <div style={{ border: "1px solid", height: "100%", width: 81 }}>
                    <span>{"+$" + (addOnsTotalPrice+parseInt(storeData.userPlan.price)) + "/" + ((storeData.userPlan.duration === "Monthly") ? "mon" : "yr")}</span>
                  </div>
                </>
              ) :
                (
                  <></>
                )}
          </div>
        </div>




      </div >



    </>
  )
}

export default Page4