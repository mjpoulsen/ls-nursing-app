import React from 'react';
import { Button } from 'react-native';

import { NavigationActions, StackActions, withNavigation } from 'react-navigation';

class ChangePasswordButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button
      title="Change Password"
      color={'#0C6360'}
      onPress={() => {
        console.log("Pressed Change Password");
        this.props.changePassword();
        this.props.navigation.navigate("Submissions");
      }}
    />;
  }
}

export default withNavigation(ChangePasswordButton);