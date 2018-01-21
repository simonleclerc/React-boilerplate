import * as React from "react";
import {Bet, Team} from "../types";
import {I18n} from "react-i18next";
import i18n from "./../i18n";

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
        {label: "aAa", id: "aaa", power: 5},
        {label: "Millenium", id: "m", power: 10}
    ];

    let betHTML: any;
    if (currentBet.amount > 0 && currentBet.id !== "") {
        const selectedTeam = teams.filter(t => t.id === currentBet.id)[0].label;
        betHTML = <p>{i18n.t("bet:current_bet_is", {amount: currentBet.amount, team: selectedTeam})}</p>;
    } else {
        betHTML = <p>{i18n.t("bet:no_bet")}</p>;
    }
    return (
        <I18n ns="translations">
            {(t, {i18n}) => (
                <div>
                    <h1>{t("bet:place")}</h1>
                    <span>{t("bet:wallet_amount")} {walletAmount}$</span><br/>
                    {teams.map((team: Team) => {
                        return <div key={team.id}
                                    onClick={() => chooseTeam(team.id)}>{t("bet:team")} {team.label}, {t("bet:power")} {team.power}</div>;
                    })}
                    <span>{t("bet:bet_amount")} {currentBet.amount}$</span>
                    <div>
                        <button onClick={() => onDecrement(currentBet)}>-</button>
                        <button onClick={() => onIncrement(walletAmount, currentBet)}>+</button>
                    </div>
                    {betHTML}

                    <button onClick={() => onFight(teams)}>{t("bet: fight")}</button>
                    {winner ? <p>{t("bet:winner_is")} {teams.filter(t => t.id === winner)[0].label}</p> :
                        <p>{t("bet:no_match")}</p>}
                </div>
            )}
        </I18n>
    );
}

export default Bet;