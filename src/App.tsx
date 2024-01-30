
import { createContext, useEffect } from 'react';
import { Game } from './utils/Game';
import GameV3 from './components/games/GameV3';
import { HashRouter, Route, Routes } from 'react-router-dom';
import MenuScreenV5 from './screens/menu_screen/MenuScreenV5';
import ConfigurationScreenV5 from './screens/configuration_screen/ConfigurationScreenV5';
import TeamsScreenV5 from './screens/national_teams/TeamsScreenV5';
import HelpScreenV5 from './screens/help_screen/HelpScreenV5';
import { LoadingScreenV6 } from './v6/loading_screen/LoadingScreenV6';
import './styles/fonts/Bebas Neue/bebasneue.css'
import './styles/fonts/Roboto/roboto.css'
import { MenuScreenV6 } from './v6/menu_screen/MenuScreenV6';
import './v6/style.scss'
import { MyPointsScreenV6 } from './v6/my_points/MyPointsScreenV6';
import { TeamsScreenV6 } from './v6/teams_screen/TeamsScreenV6';
import { GameV6 } from './utils/GameV6';
import { HelpScreenV6 } from './v6/help_screen/HelpScreenV6';
// localStorage.clear();


export interface GameContextType {
  basketball: GameV6,
  football: GameV6,
  hockey: GameV6,
  volleyball: GameV6,
  current:  GameV6 | undefined,
}

export const enum GameTypes {
  basketball = "basketball" ,
  football = "football",
  hockey = "hockey",
  volleyball = "volleyball",
}

export const GameContext = createContext<GameContextType | null>(null);

const GameContextDefaultValue : GameContextType = {
  basketball: GameV6.loadOrCreateGame(GameTypes.basketball),
  football: GameV6.loadOrCreateGame(GameTypes.football),
  hockey: GameV6.loadOrCreateGame(GameTypes.hockey),
  volleyball: GameV6.loadOrCreateGame(GameTypes.volleyball),
  current: undefined,
};

GameContextDefaultValue.current = GameContextDefaultValue.football;

function App() {
  useEffect(() => {
    // localStorage.clear();
  }, []); 

  return <GameContext.Provider value={GameContextDefaultValue}>
    <HashRouter>
        <Routes>
            <Route path="/" element={<LoadingScreenV6/>}></Route>
            <Route path="menu" element={<MenuScreenV6 />} />
            <Route path="help" element={<HelpScreenV6/>}/>
            <Route path="game" element={<GameV3/>}/> 
            <Route path="config" element={<ConfigurationScreenV5/>}/> 
            <Route path="teams" element={<TeamsScreenV6/>}/> 
            <Route path="mypoints" element={<MyPointsScreenV6/>}/> 
        </Routes>
    </HashRouter>
  </GameContext.Provider>
}

export default App;
