// Import dependencies
import * as React from "react";
import { Link } from "react-router-dom";
import * as Web3 from "web3";

const appStyles = require("../App.css");
const logo = require("../logo.svg");

interface IAppState {
    web3: Web3;
}

class Navigation extends React.Component<any, IAppState> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
        <div>
            <div className={appStyles.appHeader}>
                <img src={logo} className={appStyles.appLogo} alt="logo" />
                <h2>React Ethereum DApp Template</h2>
            </div>
            <div className={appStyles.appIntro}>
                <Link to="/">Buy</Link>
                <Link to="/send">Send</Link>
                {this.props.web3 ? (
                    <div>
                    <p>
                        Provider is MetaMask: {(this.props.web3.currentProvider as any).isMetaMask ? "yes" : "no"}
                    </p>
                    <p>
                        Provider is Mist: {(window as any).mist ? "yes" : "no"}
                    </p>
                    {(this.props.web3.currentProvider as any).host ?
                        <p>Provider is {(this.props.web3.currentProvider as any).host}</p> : null}
                    </div>
                ) : <p>Web3 is loading</p>}
            </div>
            <hr />
        </div>
      );
    }
}

export default Navigation;
