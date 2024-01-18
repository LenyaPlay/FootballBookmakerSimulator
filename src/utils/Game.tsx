import PeriodScreenV3 from "src/screens/period_screen/PeriodScreenV3";
import { TEAMS, getPoints, setPoints } from "./Utils";
import PeriodResultScreenV3 from "src/screens/period_screen/PeriodResultScreenV3";
import FinalScreen from "src/screens/final_screen/FinalScreen";
import LeagueSelectV3 from "src/screens/league_select_screen/LeagueSelectV3";
import FinalScreenBlue from "src/screens/final_screen/FinalScreenBlue";
import FinalScreenV3 from "src/screens/final_screen/FinalScreenV3";
import { useNavigate } from "react-router-dom";
import LeagueSelectV4 from "src/screens/league_select_screen/LeagueSelectV4";
import PeriodScreenV4 from "src/screens/period_screen/PeriodScreenV4";
import PeriodResultScreenV4 from "src/screens/period_screen/PeriodResultScreenV4";
import FinalScreenV4 from "src/screens/final_screen/FinalScreenV4";

interface IPrototype {  __proto__ : any; }

type Team = {
    id: number,
    name: string,
    image: string,
    force?: number,
}

type Match = {
    team1: Team,
    team2: Team,
    bet?: bet,
    winnerId?: number,
    money?: number,
    k1?: number,
    k2?: number,
    goals1?: number,
    goals2?: number,
}

type bet = {
    teamId: number | undefined,
    sum: number | undefined
}


export enum Stage {
    StartChampionship = "StartChampionship",
    StartMatch = "StartMatch",
    FinishMatch = "FinishMatch",
    FinishChampionship = "FinishChampionship",
}

export class Game {
    teams: Team[] = TEAMS.map(e => e);
    name: string = "";
    matches: Match[] = [];
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

    
    setRenderer(render : () => void) {
        this.render = render;
    }


    getScreen() {
        switch (this.stage) {
            case Stage.StartChampionship:
                return <LeagueSelectV4/>
            case Stage.StartMatch:
                return <PeriodScreenV4/>
            case Stage.FinishMatch:
                return <PeriodResultScreenV4/>
            case Stage.FinishChampionship:
                return <FinalScreenV4/>
        }
    }

    setStage(stage: Stage) {
        this.stage = stage;
        switch (stage) {
            case Stage.StartChampionship:
                this.teams = TEAMS.map(e => e);
                this.matches = [];
                this.income = 0;
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
        let points = 50;
        this.teams.forEach(team => {
            team.force = points + ~~(Math.random() * 30);
        })
    }

    generateWinners() {
        this.matches.forEach(match => {
            if (!match.team1.force || !match.team2.force) {
                return;
            }
            const R = Math.random();
            const P1 = 0.15 + 0.3 * (match.team1.force - match.team2.force);
            const P2 = 0.15 + 0.3 * (match.team2.force - match.team1.force);
            if (R < P1) {
                match.winnerId = match.team1.id;
            }
            else if (R < P1 + P2) {
                match.winnerId = match.team2.id;
            }
            else {
                match.winnerId = Math.random() > 0.5 ? match.team1.id : match.team2.id;
            }

            let goals1 = 0;
            let goals2 = 0;

            if(this.name == "basketball") {
                goals1 = getRandomInt(50, 60);
                goals2 = goals1 + getRandomInt(1, 10);
            }

            if(this.name == "football") {
                goals1 = getRandomInt(0, 3);
                goals2 = goals1 + getRandomInt(1, 3);
            }

            if(this.name == "hockey") {
                goals1 = getRandomInt(0, 4);
                goals2 = goals1 + getRandomInt(1, 5);
            }

                          
            if(match.winnerId == match.team1.id) {
                [goals1, goals2] = [goals2, goals1];
            }
            match.goals1 = goals1;
            match.goals2 = goals2;
            //-------------------------
            if (!match.bet || !match.k1 || !match.k2 || !match.bet.sum) {
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

    static loadOrCreateGame(name: string): Game {
        let result = localStorage.getItem(name);

        
        if (result != null) {
            let obj = JSON.parse(result);
            obj = {
                ...new Game(),
                ...obj,
            }
            obj.__proto__  = (new Game() as IPrototype & Game).__proto__ ;
            // console.log("de" , result, obj, obj.getScreen);
            return obj;
        }
     
        return new Game(name);;
    }
}

export type {Match, bet, Team}

function getRandomInt(min : number, max : number) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
