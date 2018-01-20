export interface StoreState {
    walletAmount: number;
    currentBet: Bet;
}

export interface Bet {
    amount: number;
    id: string;
}

export interface Team {
    label: string;
    id: string;
    power: number;
}