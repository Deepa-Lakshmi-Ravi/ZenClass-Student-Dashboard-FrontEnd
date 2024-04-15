//import React from "react";
import { useContext,useEffect } from "react";
import DataContext from '../../Context/dataContext';
const Webcode = ()=>{
  const {handleHead} = useContext(DataContext);

  useEffect(()=>{
    handleHead("WebCode");
  },[])
  return(
    <>
    <div className="webcode" style={{width:"100vw"}}>
        <h3 style={{color:"#3b4286",textAlign:"center",margin: "0"}}>No Webcode Avilable</h3>
    </div>
    </>
  )

}

export default Webcode;