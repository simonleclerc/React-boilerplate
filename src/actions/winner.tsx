import * as constants from "../constants";

export interface SetWinner {
    type: constants.SET_WINNER;
    winner: string;
}

export type WinnerAction = SetWinner;

export function setWinner(winner: string): SetWinner {
    return {
        type: constants.SET_WINNER,
        winner
    };
}