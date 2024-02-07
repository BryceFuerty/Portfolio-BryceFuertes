import React from 'react';
import { FaLinkedinIn, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiGithub, SiGmail } from 'react-icons/si';
import { IoDocumentOutline } from 'react-icons/io5';
import downloadCV from '../../assets/images/contact/CV.pdf';

const Media = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadCV;
    downloadLink.download = 'Mon_CV.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      {/* ... (autres éléments) */}
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Retrouvez moi sur
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="https://github.com/BryceFuerty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="brycefuertes07@gmail.com">
              <SiGmail />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="https://www.linkedin.com/in/bryce-fuertes-abb68b234/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Télécharger mon CV
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon" onClick={handleDownload}>
            <IoDocumentOutline />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
