import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { Link } from "react-scroll";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      
      
      <h1 style={{color:"white", fontSize:"50px", marginBottom:"20px", justifyContent:"center", fontFamily:"Montserrat, sans-serif", fontWeight:"700", display:"flex"}} >Mes compétences de BUT Informatique</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
             
          <Card item={item} key={item.id} />
          
        ))}
      </div>
    </section>
  );
};

export default Features;
