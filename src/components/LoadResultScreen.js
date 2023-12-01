import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoadResultScreen() {
  const [fill, setFill] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFill(1), 300);
    setTimeout(() => navigate('/period_result'), 750);
  }, []);

  return (
    <div className="load-result-screen">
      <div className="center">
        <p className="main-text" >Carregando <br/> resultados</p>
        <div className="progress-bar">
          <div style={{
            width: fill * 100 + '%',
          }} className="full"></div>
        </div>
      </div>
    </div>
  );
}

export default LoadResultScreen;
