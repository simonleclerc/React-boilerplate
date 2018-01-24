import * as React from "react";
import {Route, Switch} from "react-router";
import Home from "./Home";
import Bet from "../containers/Bet";
import {I18n} from "react-i18next";
import i18n from "./../i18n";
import { Layout, Menu, Dropdown, Icon, Button } from "antd";
const { Header, Footer, Content,  } = Layout;

interface Props {
}

function App({}: Props) {
    const menu = (
        <Menu>
            <Menu.Item>
                <Button onClick={() => i18n.changeLanguage("fr")}>Fr</Button>
            </Menu.Item>
            <Menu.Item>
                <Button onClick={() => i18n.changeLanguage("en")}>En</Button>
            </Menu.Item>
        </Menu>
    );
    return (
        <Layout>
            <Header>
                <Dropdown overlay={menu}>
                    <Button className="ant-dropdown-link">
                        Language <Icon type="down" />
                    </Button>
                </Dropdown>
            </Header>
            <Content>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/bet" component={Bet}/>
                </Switch>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}

export default App;