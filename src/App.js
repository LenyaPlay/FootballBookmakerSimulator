import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import LoadScreen from './screens/load_screen/LoadScreen';
import MenuScreen from './screens/menu_screen/MenuScreen';
import PeriodScreen from './screens/period_screen/PeriodScreen';
import FinalScreen from './screens/final_screen.js/FinalScreen';
import LoadResultScreen from './screens/load_screen/LoadResultScreen';
import React, { useEffect } from 'react';
import { setPeriod, setPoints } from './utils/Utils';
import PeriodResultScreen from './screens/period_screen/PeriodResultScreen';
import HelpScreen from './screens/help_screen/HelpScreen';
import LoadScreenBlue from './screens/load_screen/LoadScreenBlue';
import PeriodScreenBlue from './screens/period_screen/PeriodScreenBlue';
import MenuScreenBlue from './screens/menu_screen/MenuScreenBlue';
import LoadResultScreenBlue from './screens/load_screen/LoadResultScreenBlue';
import PeriodResultScreenBlue from './screens/period_screen/PeriodResultScreenBlue';
import FinalScreenBlue from './screens/final_screen.js/FinalScreenBlue';
import HelpScreenBlue from './screens/help_screen/HelpScreenBlue';
import NationalTeamsBlue from './screens/national_teams/NationalTeams';

// localStorage.clear();

function App() {
  useEffect(() => {
    if(localStorage.getItem('is_first') == null) {
      localStorage.setItem('is_first', 'no');
      setPoints(10000);
    }
  });

  return (<HashRouter>
    <Routes>
      <Route path="/" element={<LoadScreenBlue/>} />
      <Route path="menu" element={<MenuScreenBlue />} />
      <Route path="period" element={<PeriodScreenBlue />} />
      <Route path="period_result" element={<PeriodResultScreenBlue />} />
      <Route path="load_result" element={<LoadResultScreenBlue />} />
      <Route path="final" element={<FinalScreenBlue />} />
      <Route path="help" element={<HelpScreenBlue />} />
      <Route path="national_teams" element={<NationalTeamsBlue />} />
    </Routes>
  </HashRouter>);
}

export default App;
