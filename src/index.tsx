import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/index";
import {StoreState} from "./types/";
import Bet from "./containers/Bet";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore<any>(reducers, {
    walletAmount: 500,
    currentBet: {
        amount: 0,
        id: ""
    },
    winner: ""
},
    applyMiddleware(thunk)
);
const rootEl = document.getElementById("react-app");
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Bet/>
        </Provider>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./containers/Bet", () => {
        const NextApp = require<{ default: typeof Bet }>("./containers/Bet").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>
            ,
            rootEl
        );
    });
}