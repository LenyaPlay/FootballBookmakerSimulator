import React, { useContext, useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { setPoints } from "src/utils/Utils";
import { GameContext } from "src/App";
import LoadScreenV3 from "src/screens/load_screen/LoadScreenV3";

export default function GameV3() {
    const gameContext = useContext(GameContext);
    const [reRender, setReRender] = useState(0);

    useEffect(() => {
        if (localStorage.getItem('is_first') == null) {
            localStorage.setItem('is_first', 'no');
            setPoints(10000);
        }

        gameContext.basketball.setRenderer(() => {
            setReRender(prev => prev + 1);
        });

        gameContext.football.setRenderer(() => {
            setReRender(prev => prev + 1);
        });

        gameContext.hockey.setRenderer(() => {
            setReRender(prev => prev + 1);
        });


        gameContext.current.setRenderer(() => {
            setReRender(prev => prev + 1);
        });
    });

    const component = gameContext.current.getScreen()
    console.log(component.type);
    return component;
}
