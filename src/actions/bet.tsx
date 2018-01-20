import * as constants from "../constants";

export interface IncrementBet {
    type: constants.INCREMENT_BET;
}
export interface DecrementBet {
    type: constants.DECREMENT_BET;
}

export type BetAction = DecrementBet | IncrementBet;

export function incrementBet(): IncrementBet {
    return {
        type: constants.INCREMENT_BET
    };
}
export function decrementBet(): DecrementBet {
    return {
        type: constants.DECREMENT_BET
    };
}