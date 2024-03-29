import React, { useState } from 'react'
import { Link, scrollSpy } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
import {logo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    const offset = 70; // Ajoutez l'offset nécessaire
    const targetPosition = section.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };
  
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600" style={{height:"7rem"}}>
      <div>
        <img src={logo} alt="logo" style={{width:"30%"}} />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10" style={{paddingRight:"50px"}}>
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
              style={{fontSize:"18px"}}
            >
             <Link
                activeClass="active"
                to={link}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => {
                  scrollSpy.update(); // Forcer le recalcul du conteneur de défilement
                }}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                "I am a passionate MERN stack developer and machine learning enthusiast. With a strong foundation in web development and a keen eye for data, I create innovative solutions that bridge technology and user experience."
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <span
                      onClick={() => {
                        scrollToSection(item.link);
                        setShowMenu(false);
                      }}>
                      {item.title}
                      </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon">
                    <SiGithub />
                  </span>
                  <span className="bannerIcon">
                    <SiGmail />
                  </span>
                  <span className="bannerIcon">
                    <FaLinkedinIn />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar