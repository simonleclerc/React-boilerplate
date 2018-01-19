import {BidAction} from "../actions";
import {StoreState} from "../types";
import {INCREMENT_BID, DECREMENT_BID} from "../constants";

export function bid(state: StoreState, action: BidAction): StoreState {
    switch (action.type) {
        case DECREMENT_BID:
            if (state.currentBid >= 10) {
                return {...state, currentBid: state.currentBid - 10, walletAmount: state.walletAmount + 10};
            }
            break;
        case INCREMENT_BID:
            if (state.walletAmount >= 10) {
                return {...state, currentBid: state.currentBid + 10, walletAmount: state.walletAmount - 10};
            }
            break;
    }
    return state;
}