import React, { useState } from "react";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Tab from "../../components/tab";
import Delivery from "../../components/delivery";
import Dinningout from "../../components/dinningout";
import Nightlife from "../../components/nightlife";

const Homepage=()=>{
    const [activeTab,setActiveTab]=useState("Delivery");
    return(
        <div>
            <Header/>
            <Tab active={activeTab} setActive={setActiveTab}/>
            {correctSreen(activeTab)}
            <Footer/>
        </div>

    );
};
const correctSreen =(tabmenu)=>{
      switch(tabmenu){
          case "Delivery":
            return <Delivery/>
          case "Dinningout":
            return <Dinningout/>
          case "Nightlife":
            return <Nightlife/>
          default:
            return <Delivery/>
      }
};
export default Homepage;