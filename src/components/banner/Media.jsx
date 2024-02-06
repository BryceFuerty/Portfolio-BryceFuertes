import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Retrouvez moi sur 
          </h2>
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
      </div>
  )
}

export default Media