import {WinnerAction} from "../actions/winner";
import {SET_WINNER} from "../constants";

export function winner(state = "", action: WinnerAction): string{
    switch (action.type) {
        case SET_WINNER:
            return action.winner;
    }
    return state;
}