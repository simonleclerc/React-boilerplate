import * as constants from "../constants";

export interface ChooseTeam {
    type: constants.CHOOSE_TEAM;
    teamId: string;
}

export type TeamsAction = ChooseTeam;

export function chooseTeam(teamId: string): ChooseTeam {
    return {
        type: constants.CHOOSE_TEAM,
        teamId
    };
}