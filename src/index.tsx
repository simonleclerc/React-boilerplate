import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppContainer} from "react-hot-loader";
import {createStore, applyMiddleware} from "redux";
import reducers from "./reducers/index";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import createHistory from "history/createHashHistory";
import { Route, Switch } from "react-router-dom";
import { ConnectedRouter, routerMiddleware } from "react-router-redux";
import App from "./components/App";

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore<any>(reducers, {
        walletAmount: 500,
        currentBet: {
            amount: 0,
            id: ""
        },
        winner: ""
    },
    applyMiddleware(middleware, thunk)
);
const rootEl = document.getElementById("react-app");
ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Switch>
                    <Route path="/" component={App} />
                </Switch>
            </ConnectedRouter>
        </Provider>
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/App", () => {
        const NextApp = require<{ default: typeof App }>("./components/App").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp/>
            </AppContainer>
            ,
            rootEl
        );
    });
}