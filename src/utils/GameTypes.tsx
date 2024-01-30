
export type Team = {
    id: number,
    name: string,
    image: string,
    force?: number,
    k?: number,
}

export type Match = {
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


export interface TeamV6Type extends Team {
    isInHome?: boolean,
    trainerForce?: number,
}

export interface MatchV6Type extends Match {
    team1: TeamV6Type,
    team2: TeamV6Type,
}


export type bet = {
    teamId: number | undefined,
    sum: number | undefined
}


export interface IPrototype {  __proto__ : any; }

export enum Stage {
    StartChampionship = "StartChampionship",
    StartMatch = "StartMatch",
    FinishMatch = "FinishMatch",
    FinishChampionship = "FinishChampionship",
}