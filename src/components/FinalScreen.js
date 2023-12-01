import { useState } from "react";

function FinalScreen() {
  const [fill, setFill] = useState(1 / 5);


  return (
    <div className="final-screen">
      <div className="center">
        <p className="final-text">O Campeonato <br/> acabou!</p>
        <div className="result">
            <p className="text">Ganhos totais:</p>
            <p className="number">+71.275</p>
        </div>

        {/* <button onClick={() => {setFill(Math.random())}}>de</button> */}
      </div>
    </div>
  );
}

export default FinalScreen;
