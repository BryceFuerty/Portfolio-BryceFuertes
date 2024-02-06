import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { logo } from "../../assets/index"

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8" >
        <img className="w-32" style={{width:"80px"}} src={logo} alt="logo" />
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://github.com/BryceFuerty" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="brycefuertes07@gmail.com">
            <SiGmail /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/bryce-fuertes-abb68b234/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
      <div className="w-full h-full"></div>
      <div className="w-full h-full"></div>
      
    </div>
  );
}

export default Footer