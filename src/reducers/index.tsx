import {combineReducers} from "redux";
import {currentBet} from "./bet";
import {walletAmount} from "./walletAmount";
import {winner} from "./winner";
import {StoreState} from "../types";
import {routerReducer} from "react-router-redux";

export default combineReducers<StoreState>({
    currentBet: currentBet,
    walletAmount: walletAmount,
    winner: winner,
    router: routerReducer
});
