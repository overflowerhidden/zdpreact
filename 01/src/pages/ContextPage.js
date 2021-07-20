import React, { Component } from "react";
import { ThemeProvider, UserProvider } from "../Context";
import ContextTypePage from "./ContextTypePage";
import UseContextPage from "./UseContextPage";
import { Button } from "antd";
import ConsumerPage from "./ConsumerPage";

// var themeColor = "red";
export default class ContextPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: {
                themeColor: "red"
            },
            user: {
                name: "小明"
            }
        };
    }

    changeColor = () => {
        const { themeColor } = this.state.theme;
        this.setState({
            theme: { themeColor: themeColor === "red" ? "green" : "red" }
        });
    };

    render() {
        const { theme, user } = this.state;
        return (
            <div>
                <h3>ContextPage</h3>
                <Button type="primary" onClick={this.changeColor}>
                    change color
                </Button>
                <ThemeProvider value={theme}>
                    <UserProvider value={user}>
                        <ContextTypePage />
                        <UseContextPage />
                        <ConsumerPage />
                    </UserProvider>
                </ThemeProvider>
            </div>
        );
    }
}