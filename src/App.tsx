
import { createContext, useEffect } from 'react';
import { Game } from './utils/Game';
import GameV3 from './components/games/GameV3';
import { HashRouter, Route, Routes } from 'react-router-dom';
import LoadScreenV3 from './screens/load_screen/LoadScreenV3';
import MenuScreen from './screens/menu_screen/MenuScreen';
import MenuScreenV3 from './screens/menu_screen/MenuScreenV3';
import HelpScreenBlue from './screens/help_screen/HelpScreenBlue';
import HelpScreenV3 from './screens/help_screen/HelpScreenV3';
import MenuScreenBlue from './screens/menu_screen/MenuScreenBlue';
import MenuScreenV4 from './screens/menu_screen/MenuScreenV4';
import LoadScreenV4 from './screens/load_screen/LoadScreenV4';

// localStorage.clear();


interface GameContextType {
  basketball: Game,
  football: Game,
  hockey: Game,
  current:  Game | undefined,
}


export const GameContext = createContext<GameContextType | null>(null);

const GameContextDefaultValue : GameContextType = {
  basketball: Game.loadOrCreateGame("basketball"),
  football: Game.loadOrCreateGame("football"),
  hockey: Game.loadOrCreateGame("hockey"),
  current: undefined,
};

GameContextDefaultValue.current = GameContextDefaultValue.football;

function App() {
  useEffect(() => {
    //localStorage.clear();
  }, []); 

  
  return <GameContext.Provider value={GameContextDefaultValue}>
    <HashRouter>
        <Routes>
            <Route path="/" element={<LoadScreenV4 />} />
            <Route path="menu" element={<MenuScreenV4 />} />
            <Route path="help" element={<HelpScreenV3/>}/>
            <Route path="game" element={<GameV3/>}/> 
        </Routes>
    </HashRouter>
  </GameContext.Provider>
}

export default App;
