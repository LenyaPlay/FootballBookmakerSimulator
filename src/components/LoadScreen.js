import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoadScreen() {
  const [fill, setFill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFill(1), 300);
    setTimeout(() => navigate('/menu'), 750);
  }, []);

  return (
    <div className="load-screen">
      <div className="center">
        <p>Hora de fazer</p>
        <p className="main-text" >aposta vencedora</p>
        <div className="progress-bar">
          <div style={{
            width: fill * 100 + '%',
          }} className="full"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadScreen;
