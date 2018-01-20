import {BetAction} from "../actions/bet";
import {TeamsAction} from "../actions/teams";
import {Bet} from "../types";
import {INCREMENT_BET, DECREMENT_BET, CHOOSE_TEAM} from "../constants";

export function currentBet(state: Bet = {id: "", amount: 0}, action: BetAction | TeamsAction): Bet {
    switch (action.type) {
        case DECREMENT_BET:
            if (state.amount >= 10) {
                return {...state, amount: state.amount - 10};
            }
            break;
        case INCREMENT_BET:
            return {...state, amount: state.amount + 10};
        case CHOOSE_TEAM:
            return {...state, id: action.teamId};
    }
    return state;
}