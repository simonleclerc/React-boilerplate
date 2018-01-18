import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";

import {Hello} from "./components/Hello";

const rootEl = document.getElementById("react-app");
ReactDOM.render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    rootEl
);

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept("./components/Hello", () => {
        const NextApp = require<{default: typeof Hello}>("./components/Hello").default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>
            ,
            rootEl
        );
    });
}