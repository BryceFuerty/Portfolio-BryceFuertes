import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative" style={{paddingBottom:"100px"}}>
      <img
        className="w-[30%] h-[40%] lgl:w-[500px] lgl:h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
        style={{borderRadius:"10px"}}
      />
      
    </div>
  );
}

export default RightBanner