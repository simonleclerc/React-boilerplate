import * as constants from "../constants";

export interface IncrementBid {
    type: constants.INCREMENT_BID;
}
export interface DecrementBid {
    type: constants.DECREMENT_BID;
}

export type BidAction = DecrementBid | IncrementBid;

export function incrementBid(): IncrementBid {
    return {
        type: constants.INCREMENT_BID
    };
}
export function decrementBid(): DecrementBid {
    return {
        type: constants.DECREMENT_BID
    };
}