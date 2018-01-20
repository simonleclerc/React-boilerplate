import {INCREMENT_WALLET, DECREMENT_WALLET} from "../constants";
import {WalletAction} from "../actions/wallet";

export function walletAmount(state = 500, action: WalletAction): number {
    switch (action.type) {
        case DECREMENT_WALLET:
            if (state >= 10) {
                return state - 10;
            }
            break;
        case INCREMENT_WALLET:
            return state + 10;
    }
    return state;
}