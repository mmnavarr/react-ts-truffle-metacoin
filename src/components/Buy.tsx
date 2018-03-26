import * as React from "react";
import * as Web3 from "web3";
import MetaWallet from "./MetaWallet";

interface IBuyProps {
    web3: Web3;
}

class Buy extends React.Component<IBuyProps, {}> {

    constructor(props) {
        super(props);
        console.log(this.props);
    }

    public render() {
        return (
            <div>
                <h1>Buy</h1>
                {this.props.web3 ? <MetaWallet web3={this.props.web3} /> : null}
            </div>
        );
    }
}

export default Buy;
