// Dependencies
import React from "react";
import { Provider } from 'react-redux';

// User Dependencies
import store from '../utils/store';
import { createRootNavigator } from "../router/router";
import { isSignedIn } from "../utils/auth";

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      signedIn: false,
      checkedSignIn: false
    };
  }

  componentDidMount() {
    isSignedIn()
      .then(res => {console.log("res", res); this.setState({ signedIn: res, checkedSignIn: true });})
      .catch(err => alert("An error occurred." + err));
  }

  render() {
    const { checkedSignIn, signedIn } = this.state;

    if (!checkedSignIn) {
      console.log("returning null");
      return null;
    }

    console.log("creating layout");
    const Layout = createRootNavigator(signedIn);

    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}