import { ReportHandler } from 'web-vitals';


type Team = {
    id: number,
    name: string,
    image: string,
    force: number,
    k? : number,
}

type Match = {
    team1: Team,
    team2: Team,
    bet: bet,
    winner?: Team,
    money?: number,
}

type bet = {
    id: number | undefined,
    bet: number | undefined
}

function getEmptyBet(): bet {
    return { id: undefined, bet: undefined };
}

export const TEAMS: Team[] = [
    { id: 0, name: 'Argentina', image: require('src/assets/flags/Argentina.png'), force: 0 },
    { id: 1, name: 'França', image: require('src/assets/flags/France.png'), force: 0 },
    { id: 2, name: 'Brasil', image: require('src/assets/flags/Brazil.png'), force: 0 },
    { id: 3, name: 'Inglaterra', image: require('src/assets/flags/England.png'), force: 0 },
    { id: 4, name: 'Bélgica', image: require('src/assets/flags/Belgium.png'), force: 0 },
    { id: 5, name: 'Portugal', image: require('src/assets/flags/Portugal.png'), force: 0 },
    { id: 6, name: 'Países Baixos', image: require('src/assets/flags/Netherlands.png'), force: 0 },
    { id: 7, name: 'Espanha', image: require('src/assets/flags/Spain.png'), force: 0 },
    { id: 8, name: 'Itália', image: require('src/assets/flags/Italy.png'), force: 0 },
    { id: 9, name: 'Croácia', image: require('src/assets/flags/Croatia.png'), force: 0 },
    { id: 10, name: 'EUA', image: require('src/assets/flags/USA.png'), force: 0 },
    { id: 11, name: 'México', image: require('src/assets/flags/Mexico.png'), force: 0 },
    { id: 12, name: 'Marrocos', image: require('src/assets/flags/Morocco.png'), force: 0 },
    { id: 13, name: 'Suíça', image: require('src/assets/flags/Switzerland.png'), force: 0 },
    { id: 14, name: 'Uruguai', image: require('src/assets/flags/Uruguay.png'), force: 0 },
    { id: 15, name: 'Alemanha', image: require('src/assets/flags/Germany.png'), force: 0 },
];

function generateForces(teams: Team[]) {
    let points = 50;
    teams.forEach(team => {
        team.force = points + ~~(Math.random() * 30);
    })
}

export function generateWinner(match: Match) {
    const R = Math.random();
    const P1 = 0.15 + 0.3 * (match.team1.force - match.team2.force);
    const P2 = 0.15 + 0.3 * (match.team2.force - match.team1.force);
    if (R < P1) {
        match.winner = match.team1;
    }
    else if (R < P1 + P2) {
        match.winner = match.team2;
    }
    else {
        match.winner = Math.random() > 0.5 ? match.team1 : match.winner = match.team2;
    }
}

function genereateCoefficients(team1: Team, team2: Team) {
    let k1 = 1.25 + (1.45 - 1.25) * Math.random();
    let k2 = 1.6 + (1.8 - 1.6) * Math.random();

    if(team1.force < team2.force) {
        [k1, k2] = [k2, k1];
    } 

    team1.k = k1;
    team2.k = k2;
}

export function genereateMatches(teams: Team[]) {
    if (teams.length % 2 == 1) {
        console.log('teams count is odd');
        return [];
    }

    generateForces(teams);
    let selection = teams.map(x => x);

    let matches: Match[] = [];

    for (let i = 0; i < teams.length / 2; i++) {
        let i1 = ~~(Math.random() * selection.length);
        const t1 = selection[i1];
        selection.splice(i1, 1);

        let i2 = ~~(Math.random() * selection.length);
        const t2 = selection[i2];
        selection.splice(i2, 1);

        genereateCoefficients(t1, t2);

        matches.push({ team1: t1, team2: t2, bet: getEmptyBet() });
    }
    return matches;
}



export function getPoints() {
    let result = localStorage.getItem('points');
    if (result == null || isNaN(parseFloat(result))) {
        localStorage.setItem('points', '0');
        return 0;
    }
    return parseFloat(result);
}

export function setPoints(points: number) {
    if (isNaN(parseFloat(points + ''))) {
        return;
    }
    localStorage.setItem('points', points + '');
}

export function setPointsBeforeChampionship(points: number) {
    localStorage.setItem('points_before_championship', points + '');
}
export function getPointsBeforeChampionship() {
    let result = localStorage.getItem('points_before_championship');
    return result != null ? parseInt(result) : 0;
}

export const reportWebVitals = (onPerfEntry: ReportHandler) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  
