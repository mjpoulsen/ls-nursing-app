import React from 'react';
import { Button } from 'react-native';

import { NavigationActions, StackActions, withNavigation } from 'react-navigation';

import { onSignOut } from "../utils/auth";

// TODO make sure username and password are wiped
// TODO figure out why dispatch causes an error
class SignOutButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log("SignOutButton this.props", this.props);
    return <Button
      title={"Sign Out"}
      color={'#0C6360'}
      onPress={() => {
        onSignOut()
          .then(() => {
            console.log("Pressed SIGN OUT");
            this.props.signedOutProfile();
            this.props.navigation.navigate("SignedOut");
          }
          );
      }}
    />;
  }
}

export default withNavigation(SignOutButton);