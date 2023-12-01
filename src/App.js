import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadScreen from './components/LoadScreen';
import './App.css';
import MenuScreen from './components/MenuScreen';
import PeriodScreen from './components/PeriodScreen';
import FinalScreen from './components/FinalScreen';

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<LoadScreen />} />
      <Route path="menu" element={<MenuScreen />} />
      <Route path="period" element={<PeriodScreen />} />
      <Route path="final" element={<FinalScreen />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
