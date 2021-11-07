import React from "react";
import "./index.css";
const Tab=({active,setActive})=>{
    return(
        <div>
            <button onClick={()=>setActive("Nightlife")}>onclick</button>
        </div>
    );
};
export default Tab;