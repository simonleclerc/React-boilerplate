import * as React from "react";
import {Route, Switch} from "react-router";
import Home from "./Home";
import Bet from "../containers/Bet";

interface Props {

}

function App({}: Props) {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/bet" component={Bet} />
            </Switch>
        </div>
    );
}

export default App;