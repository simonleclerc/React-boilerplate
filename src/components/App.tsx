import * as React from "react";
import {Route, Switch} from "react-router";
import Home from "./Home";
import Bet from "../containers/Bet";
import {I18n} from "react-i18next";

interface Props {

}

function App({}: Props) {
    return (
        <I18n ns="translations">
            {(t, {i18n}) => (
                <div>
                    <button onClick={() => i18n.changeLanguage("fr")}>Fr</button>
                    <button onClick={() => i18n.changeLanguage("en")}>En</button>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/bet" component={Bet}/>
                    </Switch>
                </div>
            )}
        </I18n>
    );
}

export default App;