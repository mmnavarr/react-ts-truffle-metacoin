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
}

class App extends React.Component<{}, IAppState> {

  constructor(props) {
    super(props);
    this.state = {
      web3: null,
    };
  }

  public async componentWillMount() {
    const web3 = await getWeb3();
    this.setState({
      web3,
    });
  }

  public render() {
    return (
      <Router>
        <div className={appStyles.app}>
          <Navigation {...this.state}/>
          {/* <Route {...this.state} path="*" component={Buy}/> */}
          {/* tslint:disable-next-line:jsx-boolean-value */}
          <Route {...this.state} exact path="/" component={Buy}/>
          <Route {...this.state} path="/send" component={Send}/>
        </div>
      </Router>
    );
  }
}

export default App;
