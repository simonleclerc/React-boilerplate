import * as React from "react";

interface Props {
    walletAmount: number;
    currentBid: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

function Bid({walletAmount, currentBid, onIncrement, onDecrement}: Props) {

    return (
        <div>
            <h1>Place your bets</h1>
            <span>Wallet amount: {walletAmount}$</span><br/>
            <span>Current bid: {currentBid}$</span>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
}

export default Bid;
