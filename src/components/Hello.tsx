import * as React from "react";

interface HelloState {
}

export class Hello extends React.Component<any, HelloState> {
    render() {
        return (
            <div>
                <h1>This is my boilerplate for React!!</h1>
            </div>
        );
    }

}
