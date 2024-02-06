import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Diplomes</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[600px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor Universitaire et Technologique en informatique"
            subTitle="Institut Universitaire et Tehchnologique de Blagnac (2020 - 2024)"
            des="Parcours développement d'applications Javascript, Python"
          />
          <ResumeCard
            title="Bachelor Général"
            subTitle="Lycée Louis Rascol (2018 - 2020)"
            des="Spécialitées Mathématiques, Numérique et Sciences de l'informatique, Sciences de l'ingénieur"
          />
        </div>
      </div>

      
    </motion.div>
  );
}

export default Education