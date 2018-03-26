// Import dependencies
import * as React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import * as Web3 from "web3";
import getWeb3 from "./util/getWeb3";

const appStyles = require("./App.css");

// Import components
import Buy from "./components/Buy";
import Navigation from "./components/Navigation";
import Send from "./components/Send";

interface IAppState {
  web3: Web3;
  ready: boolean;
}

class App extends React.Component<{}, IAppState> {

  constructor(props) {
    super(props);
    this.state = {
      web3: null,
      ready: false,
    };
  }

  public async componentWillMount() {
    const web3 = await getWeb3();
    this.setState({
      web3,
      ready: true,
    });
  }

  public render() {
    if (!this.state.ready) {
      return ("");
    } else {
      console.log(this.state);
      return (
        <Router>
          <div className={appStyles.app}>
            <Navigation {...this.state}/>
            {/* <Route {...this.state} path="*" component={Buy}/> */}
            <Route exact={true} path="/" render={() => (<Buy web3={this.state.web3} />)}/>
            <Route exact={true} path="/send" render={() => (<Send web3={this.state.web3} />)}/>
          </div>
        </Router>
      );
    }
  }
}

export default App;
