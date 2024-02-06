import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Développeur Full Stack", "Etudiant à l'iut de Blagnac"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 20000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Bonjour !</h4>
        <h1 className="text-6xl font-bold text-white">
          Je m'appelle Bryce Fuertes
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "Je suis un grand passionné de développement d'applications et plus généralement par l'informatique et les nouvelles technologies, cette passion dure depuis plus de 6 ans"
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner