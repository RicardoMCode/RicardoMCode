import React from "react";

const WelcomeText = () => {
  const phrase = `Hay tres tipos de personas en el mundo, 
    los que hacen que las cosas pasen,
    los que ven cómo pasan las cosas
    y los que se preguntan cómo pasaron las cosas.`;
  const authorPhrase = `By. Nicholas Murray Butler`;
  const comentPhrase = `! Haz que las cosas pasen ¡`;
  return (
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
  );
};

export default WelcomeText;
