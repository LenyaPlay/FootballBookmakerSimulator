import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import LoadScreen from './components/LoadScreen';
import './App.css';
import MenuScreen from './components/MenuScreen';
import PeriodScreen from './components/PeriodScreen';
import FinalScreen from './components/FinalScreen';
import LoadResultScreen from './components/LoadResultScreen';
import React, { useEffect } from 'react';
import { setPeriod, setPoints } from './Utils';
import PeriodResultScreen from './components/PeriodResultScreen';
import HelpScreen from './components/HelpScreen';

function App() {

  useEffect(() => {
    if(localStorage.getItem('is_first') == null) {
      localStorage.setItem('is_first', 'no');
      setPoints(10000);
    }

  });

  return (<HashRouter>
    <Routes>
      <Route path="/" element={<LoadScreen />} />
      <Route path="menu" element={<MenuScreen />} />
      <Route path="period" element={<PeriodScreen />} />
      <Route path="period_result" element={<PeriodResultScreen />} />
      <Route path="load_result" element={<LoadResultScreen />} />
      <Route path="final" element={<FinalScreen />} />
      <Route path="help" element={<HelpScreen />} />
    </Routes>
  </HashRouter>);
}

export default App;
