import * as React from "react";
import {Link} from "react-router-dom";

interface Props {

}

function Home({}: Props) {
    return (
        <div>
            <h1>Hello, welcome to this react boilerplate</h1>
            <p>Go <Link to="/bet">there</Link> if you want to bet on your team</p>
        </div>
    );
}

export default Home;