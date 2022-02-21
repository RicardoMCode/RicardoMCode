import React from "react";
import Certificate from "../components/Certificate";
import certificatesList from "../resources/certificatesData.json";

const Certificates = () => {
  return (
    <>
      {certificatesList.map((ceritficate) => (
        <Certificate name={ceritficate.name} link ={ceritficate.imgLink} key={ceritficate.id} />
      ))}
    </>
  );
};

export default Certificates;
