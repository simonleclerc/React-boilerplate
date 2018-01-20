import * as constants from "../constants";

export interface IncrementWallet {
    type: constants.INCREMENT_WALLET;
}
export interface DecrementWallet {
    type: constants.DECREMENT_WALLET;
}

export type WalletAction = DecrementWallet | IncrementWallet;

export function incrementWallet(): IncrementWallet {
    return {
        type: constants.INCREMENT_WALLET
    };
}
export function decrementWallet(): DecrementWallet {
    return {
        type: constants.DECREMENT_WALLET
    };
}
