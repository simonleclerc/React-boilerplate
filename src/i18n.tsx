import * as i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

i18n
    .use(reactI18nextModule)
    .init({
        fallbackLng: "en",
        resources: {
            en: {
                bet: {
                    no_bet: "You have no bet yet. Please choose a team and an amount.",
                    bet_amount: "Current bet amount:",
                    current_bet_is: "Your current bet is {{amount}}$ on the team {{team}}.",
                    place: "Place your bets",
                    fight: "Fight!",
                    winner_is: "And the winner is:",
                    no_match: "No match yet",
                    wallet_amount: "Wallet amount:",
                    power: "power:",
                    team: "Team"
                },
                home: {
                    welcome: "Hello, welcome to this react boilerplate",
                    redirect: {
                        part1: "Go",
                        part2: "there",
                        part3: "if you want to bet on your team"
                    }
                }
            },
            fr: {
                bet: {
                    no_bet: "Vous n'avez pas encore de pari. Choisissez une équipe et un montant.",
                    bet_amount: "Montant du pari actuel :",
                    current_bet_is: "Votre pari actuel est de {{amount}}$ sur l'équipe {{team}}.",
                    place: "Faites vos jeux",
                    fight: "Fight!",
                    winner_is: "Et le gagnant est :",
                    no_match: "Pas encore de match.",
                    wallet_amount: "Montant du portefeuille:",
                    power: "puissance:",
                    team: "Equipe"
                },
                home: {
                    welcome: "Bonjour, bienvenue sur ce boilerplate React",
                    redirect: {
                        part1: "Allez",
                        part2: "ici",
                        part3: "si vous voulez parier sur votre équipe."
                    }
                }
            }
        },
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations",

        debug: true,

        react: {
            wait: true
        }
    });


export default i18n;