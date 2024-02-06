import { AiFillAppstore } from "react-icons/ai";
import {  FaBrain} from "react-icons/fa";
import { SiProgress} from "react-icons/si";
import { CgWebsite } from "react-icons/cg";
import { MdAnalytics } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";

// Features Data
export const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Compétence 1 : Réaliser un développement d'application",
    des: "capacité à concevoir, créer et mettre en œuvre des applications informatiques en répondant aux besoins spécifiques, de la conception à la maintenance, en passant par le développement, les tests et le déploiement.",
    link: "competence1",
  },
  {
    id: 2,
    icon: <CgWebsite />,
    title: "Compétence 2 : Optimiser des applications informatiques",
    des: "La capacité à améliorer les performances et l'efficacité des applications. Mais aussi l'adoption de meilleures pratiques pour un fonctionnement optimal des applications.",
    link: "competenceTwo",
  },
  {
    id: 3,
    icon: <SiProgress />,
    title: "Compérence 3 : Administrer des systèmes informatiques communicants complexes",
    des: "La capacité à gérer et superviser des systèmes informatiques complexes qui interagissent et communiquent entre eux.",
    link: "competenceThree",
  },
  {
    id: 4,
    icon: <FaDatabase />,
    title: "Compétence 4 : Gérer des données de l'information",
    des: "La capacité à collecter, organiser, stocker, traiter et maintenir des données. Cela englobe la gestion des bases de données, la protection des informations et la mise en œuvre de stratégies de sauvegarde.",
    link: "competence4",
  },
  {
    id: 5,
    icon: <FaProjectDiagram />,
    title: "Compétence 5 : Conduire un projet",
    des: "La capacité à planifier, coordonner et superviser toutes les étapes d'un projet informatique. Cela inclut la gestion des ressources, des échéanciers, des budgets et la prise de décisions stratégiques tout au long du projet.",
    link: "competence5",
  },
  {
    id: 6,
    icon: <RiTeamLine />,
    title: "Compétence 6 : Travailler dans une équipe informatique",
    des: "La capacité à collaborer efficacement au sein d'un groupe de professionnels de l'informatique. Cela englobe la communication claire et la résolution de problèmes en équipe.",
    link: "competence6",
  }
  
];
