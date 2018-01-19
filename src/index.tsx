import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import {createStore} from "redux";
import {bid} from "./reducers/index";
import {StoreState} from "./types/index";
import Bid from "./containers/Bid";
import {Provider} from "react-redux";

const store = createStore<StoreState>(bid, {
    walletAmount: 500,
    currentBid: 0
});

const rootEl = document.getElementById("react-app");
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Bid />
        </Provider>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./containers/Bid", () => {
        const NextApp = require<{default: typeof Bid}>("./containers/Bid").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            ,
            rootEl
        );
    });
}