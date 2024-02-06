import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <div>
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 1 : Réaliser"
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projets associés : </h1>
      <br/>
       <ProjectsCard
          title="Site Web de gestion de bibliothèque"
          des="Réalisation d'une application Web de gestion de bibliothèque, s'étendant au développement avec angular mais aussi aux bases de données avec la mySql et même jusqu'à la documentation et la gestion de projet"
          src={projectFour}
          githubLink="https://github.com/AurelienSP/SAE-S6"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
        <br/>
        <br/>
        <ProjectsCard
          title="Gestionnaire de Projet"
          des="Réalisation d'une application de gestion de projets destinée à être utilisé lors des années suivantes. Ce projet à lié à la fois le développement avec React, la gestion de bases de données avec MongoDB et la gestion de projets avec GitHub"
          src={projectOne}
          githubLink="https://github.com/IUT-Blagnac/sae-5-1-01-phase4-cafe-noisette"

        />
      
      <br/>
      <br/>
      <br/>
      
      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 2 : Optimiser"
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projet associé : </h1>
      <br/>

      <ProjectsCard
          title="Gestionnaire de vacataires"
          des="Reprise en cours du déploiement d'une application Web de gestion des professeurs vacataires dans le but d'améliorer et optimiser le travail effectué par les groupes déjà affectés, cette application a été développée avec les technologies React pour la partie Front et Java Quarkus pour la partie back. "
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />

      <br/>
      <br/>
      <br/>

     
      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 3 : Administrer"
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projet associé : </h1>
      <br/>

      <ProjectsCard
          title="Gestionnaire de vacataires"
          des="Administration des données pouvant venir de plusieurs sources qui sont les différentes tables de données présentes durant ce projet"
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />

      <br/>
      <br/>
      <br/>
      

     
      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 4 : Gérer"
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projet associé : </h1>
      <br/>

      <ProjectsCard
          title="Site Web de gestion de bibliothèque"
          des="Développement nos capacités à mettre en place des bases de données relationnelles via MySql complexes visant à être utilisées de manières réelles"
          src={projectFour}
          githubLink="https://github.com/AurelienSP/SAE-S6"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />

      <br/>
      <br/>
      
      <ProjectsCard
          title="Gestionnaire de vacataires"
          des="Développement nos capacités à mettre en place des bases de données non relationelles via MongoDB complexes visant à être utilisées de manières réelles"
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />

      <br/>
      <br/>
      <br/>
      

     
    
      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 5 : Conduire"
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projets associés : </h1>
      <br/>
        <ProjectsCard
          title="Site Web vitrine"
          des="Réalisation d'un site Web vitrine pour un professionnel. Ce projet est personnel ce qui m'a permis d'apprendre à conduire un projet de A à Z en autonomie"
          src={projectTwo}
          githubLink="https://github.com/BryceFuerty/WebSite-pepino"
          websiteLink="https://main--helpful-manatee-7b528d.netlify.app/?fbclid=IwAR3PSYXBE9HieNj2V52qM2bWWMDEoVVypj0PG0bN4-Nk3THIz5Jiz-e98Bc"
        />

      <br/>
      <br/>
      <br/>
      

     

      <div className="flex justify-center items-center text-center">
        <Title
          des="Compétence 6 : Travailler "
        />
      </div>
      <h1 style={{fontSize:"30px"}}> Projets associés : </h1>
      <br/>
      <ProjectsCard
          title="Site Web de gestion de bibliothèque"
          des="Apprentissage du travail en groupe sans pour autant faire une séparation sur les différentes parties du projet, le back et le front n'ont pas été attribués mais ce sont plutôt les taches qui l'ont été."
          src={projectFour}
          githubLink="https://github.com/AurelienSP/SAE-S6"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
       <br/>
        <br/>
      <ProjectsCard
          title="Gestionnaire de vacataires"
          des="Apprentissage de l'intégration d'une équipe même durant un projet déjà commencé, ce qui inclus la compréhension du code, des besoins et de la méthode de travail de l'équipe."
          src={projectThree}
          githubLink="https://github.com/mihirc0111/Secrets"
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
       <br/>
        <br/>
      <ProjectsCard
          title="Gestionnaire de Projet"
          des="Renforcement nos capacités à travailler en équipe par le temps de projet qui était court et nécessitait une bonne organisation dans l'équipe"
          src={projectOne}
          githubLink="https://github.com/IUT-Blagnac/sae-5-1-01-phase4-cafe-noisette"

        />
        
      </section>
        
        </div>
  );
}

export default Projects