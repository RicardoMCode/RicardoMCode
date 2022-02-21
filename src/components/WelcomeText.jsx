import React from "react";

const WelcomeText = () => {
  const myself = `Soy una persona soñadora, enamorada del autoaprendizaje y el crecimiento constante.
  Defino mi trabajo en cinco palabras, pasión, curiosidad, calidad, perseverancia y gratitud. 
  Te invito a ver en este módulo algunos de mis proyectos personales, para cada uno encontrarás una descripción 
  clara y un demo, en el módulo "sobré mí" te cuento un poco de mí vida/filosofía y comparto algunas certificaciones 
  que me han ayudado a obtener y consolidar los conocimientos que aplico día a día en mi trabajo, espero que te guste.
  `;
  const phrase = `Hay tres tipos de personas en el mundo, 
    los que hacen que las cosas pasen,
    los que ven cómo pasan las cosas
    y los que se preguntan cómo pasaron las cosas.`;
  const authorPhrase = `By. Nicholas Murray Butler`;
  const comentPhrase = `! Haz que las cosas pasen ¡`;
  return (
    <>
      <div className="text-myself">
        <p>{myself}</p>
      </div>
      <div className="phrase-container">
        <div className="phrase">
          <h1>{phrase}</h1>
        </div>
        <div className="phrase-author">
          <h2>{authorPhrase}</h2>
        </div>
        <div className="phrase-coment">
          <h1>{comentPhrase}</h1>
        </div>
      </div>
    </>
  );
};

export default WelcomeText;
