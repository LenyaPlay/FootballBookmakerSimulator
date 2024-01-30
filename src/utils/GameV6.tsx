import PeriodScreenV3 from "src/screens/period_screen/PeriodScreenV3";
import {  TEAMS3, getPoints, setPoints } from "./Utils";
import PeriodResultScreenV5 from "src/screens/period_screen/PeriodResultScreenV5";
import FinalScreenV5 from "src/screens/final_screen/FinalScreenV5";
import { LeagueSelectScreenV6 } from "src/v6/league_select_screen/LeagueSelectScreenV6";
import { PeriodScreenV6 } from "src/v6/period_screen/PeriodScreenV6";
import { IPrototype, Match, MatchV6Type, Stage, Team, TeamV6Type, bet } from "./GameTypes";
import { GameTypes } from "src/App";
import { PeriodResultScreenV6 } from "src/v6/period_screen/PeriodResultScreenV6";
import { FinalScreenV6 } from "src/v6/final_screen/FinalScreenV6";


export class GameV6 {
    teams: TeamV6Type[] = TEAMS3.map(e => e);
    name: string = "";
    matches: MatchV6Type[] = [];
    stage = Stage.StartChampionship;
    maxPeriod = 8;
    income = 0;
    render () {

    };

    constructor(name?: string) {
        this.name = name ? name : "";
        this.generateForces();
        this.save();
    }

    getLeague() {
        if(this.name == GameTypes.football) {
            return "футбольная лига";
        }
        if(this.name == GameTypes.basketball) {
            return "баскетбольная лига";
        }
        if(this.name == GameTypes.hockey) {
            return "хоккейная лига";
        }
        if(this.name == GameTypes.volleyball) {
            return "волейбольная лига";
        }
    }
    

    getPeriod() {
        if(this.matches.length == 2) {
            return "Полуфинал";
        }
        if(this.matches.length == 1) {
            return "Финал";
        }
        return `1/${this.matches.length} финала`;
    }

    
    setRenderer(render : () => void) {
        this.render = render;
    }


    getScreen() {
        switch (this.stage) {
            case Stage.StartChampionship:
                return <LeagueSelectScreenV6/>
            case Stage.StartMatch:
                return <PeriodScreenV6/>
            case Stage.FinishMatch:
                return <PeriodResultScreenV6/>
            case Stage.FinishChampionship:
                return <FinalScreenV6/>
        }
    }

    setStage(stage: Stage) {
        this.stage = stage;
        switch (stage) {
            case Stage.StartChampionship:
                this.teams = TEAMS3.map(e => e);
                this.matches = [];
                this.income = 0;
                this.render();
                break;
            case Stage.StartMatch:
                this.removeLosers();
                if (this.teams.length <= 1) {
                    this.stage = Stage.FinishChampionship;
                    break;
                }
                this.genereateMatches();
                this.genereateCoefficients();
                break;
            case Stage.FinishMatch:
                this.generateWinners()
                break;
        }
        this.save();
        this.render();
    }


    generateForces() {
        let IO = 50;
        let IO2 = 5
        this.teams.forEach(team => {
            let GN = ~~(Math.random() * 30)
            let GN2 = ~~(Math.random() * 5)
            team.force = IO + ~~GN;
            team.trainerForce = IO2 + GN2;
        })
    }

    generateWinners() {
        this.matches.forEach(match => {
            if (!match.team1.force || !match.team2.force) {
                return;
            }

            const P1 = 0.15 + Math.random() * (0.30 - 0.15);
            const P2 = 0.05 + Math.random() * (0.10 - 0.05);
            const P3 = 0.02 + Math.random() * (0.05 - 0.02);

            const X1 = match.team1.force;
            const X12 = match.team2.force;

            const X2 = match.team1.trainerForce ?? 0;
            const X22 = match.team2.trainerForce ?? 0;

            const X3 = match.team1.isInHome ? 1 : 0;
            const X32 = match.team2.isInHome ? 1 : 0;

            const PX1 = (X1 * P1+ X2 * P2+ X3* P3) / (X1 * P1 + X2 * P2+ X3* P3 + X12 * P1 + X22 * P2+ X32* P3);
            const R = Math.random();

            if (R < PX1) {
                match.winnerId = match.team1.id;
            }
            else {
                match.winnerId = match.team2.id;
            }

            let goals1 = 0;
            let goals2 = 0;

            if(this.name == GameTypes.basketball) {
                goals1 = getRandomInt(50, 60);
                goals2 = goals1 + getRandomInt(1, 10);
            }

            if(this.name == GameTypes.football) {
                goals1 = getRandomInt(0, 3);
                goals2 = goals1 + getRandomInt(1, 3);
            }

            if(this.name == GameTypes.hockey) {
                goals1 = getRandomInt(0, 4);
                goals2 = goals1 + getRandomInt(1, 5);
            }

            if(this.name == GameTypes.volleyball) {
                goals1 = getRandomInt(0, 2);
                goals2 = 3;
            }

                          
            if(match.winnerId == match.team1.id) {
                [goals1, goals2] = [goals2, goals1];
            }
            match.goals1 = goals1;
            match.goals2 = goals2;
            //-------------------------
            
            if (!match.bet || !match.k1 || !match.k2 || !match.bet.sum || !match.bet.teamId) {
                return;
            };

            let _money = 0;
            if (match.winnerId == match.bet.teamId) {
                if (match.team1.id == match.winnerId) {
                    _money = match.bet.sum * match.k1;
                } else {
                    _money = match.bet.sum * match.k2;
                }
                this.income = this.income - match.bet.sum + _money;
                setPoints(getPoints() - match.bet.sum + _money);
            } else {
                _money = -match.bet.sum;
                this.income = this.income-match.bet.sum;
                setPoints(getPoints() - match.bet.sum);
            }
            match.money = _money;
        });


    }

    genereateCoefficients() {
        this.matches.forEach(match => {
            let k1 = 1.25 + (1.45 - 1.25) * Math.random();
            let k2 = 1.6 + (1.8 - 1.6) * Math.random();

            if (match.team1.force && match.team2.force && match.team1.force < match.team2.force) {
                [k1, k2] = [k2, k1];
            }

            match.k1 = k1;
            match.k2 = k2;
        });
    }

    genereateMatches() {
        this.matches = [];
        if (this.teams.length % 2 == 1) {
            console.log('teams count is odd');
            return [];
        }

        let selection = this.teams.map(x => x);

        for (let i = 0; i < this.teams.length / 2; i++) {
            let i1 = ~~(Math.random() * selection.length);
            const t1 = selection[i1];
            selection.splice(i1, 1);

            let i2 = ~~(Math.random() * selection.length);
            const t2 = selection[i2];
            selection.splice(i2, 1);

            
            t1.isInHome = false;
            t2.isInHome = false;
            
            if(Math.random() < 0.5){
                t1.isInHome = true;
            } else {
                t2.isInHome = true;
            }

            this.matches.push({
                team1: t1,
                team2: t2,
            });
        }

    }

    removeLosers() {
        let losers = this.teams.filter((team) => {
            return !this.matches.map(m => m.winnerId).includes(team.id);
        })
        this.teams = this.teams.filter(team => losers.map(l => l.id).includes(team.id));
    }

    save() {
        localStorage.setItem(this.name, JSON.stringify(this));
    }

    static getEmptyBet(): bet {
        return { teamId: undefined, sum: undefined };
    }

    static loadOrCreateGame(name: string): GameV6 {
        let result = localStorage.getItem(name);

        
        if (result != null) {
            let obj = JSON.parse(result);
            obj = {
                ...new GameV6(),
                ...obj,
            }
            obj.__proto__  = (new GameV6() as IPrototype & GameV6).__proto__ ;
            // console.log("de" , result, obj, obj.getScreen);
            return obj;
        }
     
        return new GameV6(name);;
    }
}

export type {Match, bet, Team}

function getRandomInt(min : number, max : number) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
