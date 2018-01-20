import * as React from "react";
import {Bet, Team} from "../types";

interface Props {
    walletAmount: number;
    currentBet: Bet;
    winner: string;
    onDecrement?: (currentBet: Bet) => void;
    onIncrement?: (walletAmount: number, currentBet: Bet) => void;
    chooseTeam?: (teamId: string) => void;
    onFight?: (teams: Team[]) => void;
}

function Bet({walletAmount, currentBet, winner, onIncrement, onDecrement, chooseTeam, onFight}: Props) {
    const teams = [
        {label: "blue", id: "bbb", power: 5},
        {label: "red", id: "rrr", power: 10}
        ];

    let betHTML: any;
    if (currentBet.amount > 0 && currentBet.id !== "") {
        betHTML = <p>Your current bet is {currentBet.amount}$ on the team {teams.filter(t => t.id === currentBet.id)[0].label}</p>;
    } else {
        betHTML = <p>You have no bet yet. Please choose a team and an amount.</p>;
    }
    return (
        <div>
            <h1>Place your bets</h1>
            <span>Wallet amount: {walletAmount}$</span><br/>
            {teams.map((team: Team) => {
                return <div key={team.id} onClick={() => chooseTeam(team.id)}>Team {team.label}, power: {team.power}</div>;
            })}
            <span>Current bet amount: {currentBet.amount}$</span>
            <div>
                <button onClick={() => onDecrement(currentBet)}>-</button>
                <button onClick={() => onIncrement(walletAmount, currentBet)}>+</button>
            </div>
            {betHTML}

            <button onClick={() => onFight(teams)}>Fight!</button>
            And the winner is: {winner}
        </div>
    );
}

export default Bet;