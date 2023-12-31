import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, guest!",
            buttonText: "log in"
        }
    };

    handleClick() {
        this.setState((prevState) => {
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
                buttonText: prevState.buttonText === "log in" ? "log out" : "log in"
            }

        })

    }

    render() {
        return(
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                    <div>
                        <span>{this.state.message}
                            <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                        </span>
                    </div>
            </div>
        );
    }
}

export default NavBarSimple