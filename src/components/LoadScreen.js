import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoadScreen() {
  const [fill, setFill] = useState(1 / 5);
  const navigate = useNavigate();

  useEffect(() => {
    //test animation and navigatings
    setTimeout(() => setFill(0.5), 500);
    setTimeout(() => setFill(1), 1500);
    setTimeout(() => navigate('/menu'), 1500+500);
  }, []);

  return (
    <div className="load-screen">
      <div className="center">
        <p>Hora de fazer</p>
        <p className="aposta-vencedora" >aposta vencedora</p>
        <div className="progress-bar">
          <div style={{
            width: fill * 100 + '%',
          }} className="full"></div>
        </div>
        <button onClick={() => {navigate('/menu')}}>de</button>
      </div>
    </div>
  );
}

export default LoadScreen;
