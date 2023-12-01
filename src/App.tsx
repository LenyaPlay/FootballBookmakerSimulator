import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadScreen from './components/LoadScreen';
import './App.css';
import MenuScreen from './components/MenuScreen';
import PeriodScreen from './components/PeriodScreen';
import FinalScreen from './components/FinalScreen';
import LoadResultScreen from './components/LoadResultScreen';
import React, { useEffect } from 'react';
import { setPoints } from './Utils';
import PeriodResultScreen from './components/PeriodResultScreen';

function App() {

  useEffect(() => {
    if(localStorage.getItem('is_first') == null) {
      localStorage.setItem('is_first', 'no');
      setPoints(10000);
    }
  });

  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<LoadScreen />} />
      <Route path="menu" element={<MenuScreen />} />
      <Route path="period" element={<PeriodScreen />} />
      <Route path="period_result" element={<PeriodResultScreen />} />
      <Route path="load_result" element={<LoadResultScreen />} />
      <Route path="final" element={<FinalScreen />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
