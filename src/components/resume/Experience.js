import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Expérience profesionnelle</h2>
        </div>
        <div className="mt-14 w-full h-[400px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Apprenti développeur d'application et de bases de données"
            subTitle="Thales Alenia Space - (2021 - Present)"
            result="Toulouse, France"
            des="Développement d'outils et de macros d'automatisation pour divers logiciels"
          />
          
        </div>
      </div>
      
    </motion.div>
  );
};

export default Experience;
