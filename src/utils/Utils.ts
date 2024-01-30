import Match from 'src/components/match/Match';
import { ReportHandler } from 'web-vitals';
import { Team } from './GameTypes';


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

export const TEAMS2: Team[] = [
    { id: 0, name: 'Porto\nAlegre', image: require('src/assets/teams2/1.png'), force: 0 },
    { id: 1, name: 'São\nPaulo', image: require('src/assets/teams2/2.png'), force: 0 },
    { id: 2, name: 'Belo\nHorizonte', image: require('src/assets/teams2/3.png'), force: 0 },
    { id: 3, name: 'Rio de\nJaneiro', image: require('src/assets/teams2/4.png'), force: 0 },

    { id: 4, name: 'Rio de\nJaneiro', image: require('src/assets/teams2/5.png'), force: 0 },
    { id: 5, name: 'Bragança\nPaulista', image: require('src/assets/teams2/6.png'), force: 0 },
    { id: 6, name: 'Rio de\nJaneiro', image: require('src/assets/teams2/7.png'), force: 0 },
    { id: 7, name: 'Curitiba', image: require('src/assets/teams2/8.png'), force: 0 },

    { id: 8, name: 'Porto\nAlegre', image: require('src/assets/teams2/9.png'), force: 0 },
    { id: 9, name: 'Fortaleza', image: require('src/assets/teams2/10.png'), force: 0 },
    { id: 10, name: 'São\nPaulo', image: require('src/assets/teams2/11.png'), force: 0 },
    { id: 11, name: 'São\nPaulo', image: require('src/assets/teams2/12.png'), force: 0 },

    { id: 12, name: 'Belo\nHorizonte', image: require('src/assets/teams2/13.png'), force: 0 },
    { id: 13, name: 'Rio de\nJaneiro', image: require('src/assets/teams2/14.png'), force: 0 },
    { id: 14, name: 'Salvador', image: require('src/assets/teams2/15.png'), force: 0 },
    { id: 15, name: 'Santos', image: require('src/assets/teams2/16.png'), force: 0 },
];


export const TEAMS3: Team[] = [
    { id: 0, name: 'Новосибирск', image: require('src/assets/v6/flags/1.jpg'), force: 0 },
    { id: 1, name: 'Самара', image: require('src/assets/v6/flags/2.png'), force: 0 },
    { id: 2, name: 'Казань', image: require('src/assets/v6/flags/3.png'), force: 0 },
    { id: 3, name: 'Санкт-Петербург', image: require('src/assets/v6/flags/4.png'), force: 0 },

    { id: 4, name: 'Нижний Новгород', image: require('src/assets/v6/flags/5.png'), force: 0 },
    { id: 5, name: 'Пермь', image: require('src/assets/v6/flags/6.png'), force: 0 },
    { id: 6, name: 'Волгоград', image: require('src/assets/v6/flags/7.png'), force: 0 },
    { id: 7, name: 'Омск', image: require('src/assets/v6/flags/8.png'), force: 0 },

    { id: 8, name: 'Воронеж', image: require('src/assets/v6/flags/9.png'), force: 0 },
    { id: 9, name: 'Челябинск', image: require('src/assets/v6/flags/10.png'), force: 0 },
    { id: 10, name: 'Уфа', image: require('src/assets/v6/flags/11.png'), force: 0 },
    { id: 11, name: 'Москва', image: require('src/assets/v6/flags/12.jpg'), force: 0 },

    { id: 12, name: 'Екатеринбург', image: require('src/assets/v6/flags/13.png'), force: 0 },
    { id: 13, name: 'Красноярск', image: require('src/assets/v6/flags/14.png'), force: 0 },
    { id: 14, name: 'Ростов-на-Дону', image: require('src/assets/v6/flags/15.jpg'), force: 0 },
    { id: 15, name: 'Краснодар', image: require('src/assets/v6/flags/16.png'), force: 0 },
];




export function getPoints() {
    let result = localStorage.getItem('points');

    if (result == null || isNaN(parseFloat(result))) {
        localStorage.setItem('points', '');
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

