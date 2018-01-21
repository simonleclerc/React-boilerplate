import * as React from "react";
import {Link} from "react-router-dom";
import {I18n} from "react-i18next";

interface Props {

}

function Home({}: Props) {
    return (
        <I18n ns="translations">
            {(t, {i18n}) => (
                <div>
                    <h1>{i18n.t("home:welcome")}</h1>
                    <p>{i18n.t("home:redirect.part1")} <Link
                        to="/bet">{i18n.t("home:redirect.part2")}</Link> {i18n.t("home:redirect.part3")}</p>
                </div>
            )}
        </I18n>
    );
}

export default Home;