import * as React from "react";
import * as Web3 from "web3";
import MetaWallet from "./MetaWallet";

interface ISendProps {
    web3: Web3;
}

class Send extends React.Component<ISendProps, {}> {

    constructor(props) {
        super(props);
        console.log(this.props.web3);
      }

    public render() {
        return (
            <div>
                <h1>Send</h1>
                {this.props.web3 ? <MetaWallet web3={this.props.web3} /> : null}
            </div>
        );
    }
}

export default Send;
