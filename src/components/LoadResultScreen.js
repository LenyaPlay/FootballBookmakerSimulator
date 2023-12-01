import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function LoadResultScreen() {
  const [fill, setFill] = useState(1 / 5);
  const navigate = useNavigate();

  useEffect(() => {
    //test animation and navigatings
    setTimeout(() => setFill(0.5), 500);
    setTimeout(() => navigate('/period_result'), 2000);
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
