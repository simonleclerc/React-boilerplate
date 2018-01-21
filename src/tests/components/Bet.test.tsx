import * as React from "react";
import * as Enzyme from "enzyme";
import * as mocha from "mocha";
import Bet from "../../components/Bet";
import {expect} from "chai";
import * as Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Bet", () => {
    it("renders the correct text when no enthusiasm level is given", () => {
        const bet = Enzyme.mount(<Bet walletAmount={500} currentBet={{amount: 0, id: ""}} winner={undefined}/>);
        expect(bet.find(".walletAmount").text()).to.equal("Wallet amount: 500$");
    });
});