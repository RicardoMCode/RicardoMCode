import React from "react";
import Certificate from "../components/Certificate";
import certificateImage from "@images/certificado1.png";

const Certificates = () => {
  const certificateList = [
    {
      img: certificateImage,
      id: 1,
    },
    {
      img: certificateImage,
      id: 2,
    },
    {
      img: certificateImage,
      id: 3,
    },
    {
      img: certificateImage,
      id: 4,
    },
    {
      img: certificateImage,
      id: 5,
    },
    {
      img: certificateImage,
      id: 6,
    },
    {
      img: certificateImage,
      id: 7,
    },
  ];
  return (
    <div className="certificate-content">
      {certificateList.map((ceritficate) => (
        <Certificate image={ceritficate.img} key={ceritficate.id} />
      ))}
    </div>
  );
};

export default Certificates;
