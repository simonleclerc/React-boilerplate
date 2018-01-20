import Bet from "../components/Bet";
import * as betActions from "../actions/bet";
import * as teamActions from "../actions/teams";
import * as walletActions from "../actions/wallet";
import * as winnerActions from "../actions/winner";
import {connect, Dispatch} from "react-redux";
import {Bet as BetInterface, Team} from "../types";

export function mapStateToProps({currentBet, walletAmount, winner}: any) {
    return {
        currentBet,
        walletAmount,
        winner
    };
}

export function mapDispatchToProps(dispatch: Dispatch<betActions.BetAction | walletActions.WalletAction | teamActions.TeamsAction | winnerActions.WinnerAction>) {
    return {
        onIncrement: (walletAmount: number, currentBet: BetInterface) => {
            if (walletAmount >= 10) {
                dispatch(betActions.incrementBet());
                dispatch(walletActions.decrementWallet());
            }
        },
        onDecrement: (currentBet: BetInterface) => {
            if (currentBet.amount >= 10) {
                dispatch(betActions.decrementBet());
                dispatch(walletActions.incrementWallet());
            }
        },
        chooseTeam: (teamId: string) => dispatch(teamActions.chooseTeam(teamId)),
        onFight: (teams: Team[]) => {
            const allPower = teams.map(t => t.power).reduce((a, b) => a + b, 0);
            const fightRand = Math.floor(Math.random() * allPower) + 1;
            let pastPower = 0;
            let winner: string;
            teams.map((t) => {
                if (!winner && fightRand <= pastPower + t.power) {
                    winner = t.id;
                }
                pastPower += t.power;
            });
            dispatch(winnerActions.setWinner(winner));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Bet);