import React from 'react';
import { Button, StyleSheet } from 'react-native';

import { NavigationActions, StackActions, withNavigation } from 'react-navigation';

class EditJobButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Button
      title="Edit"
      style={styles.button}
      color={'#0C6360'}
      onPress={() => {
        console.log("Pressed Edit Job Button -- key", this.props.jobKey);
        this.props.editJob(this.props.jobKey);
        this.props.navigation.navigate("SubmitJob");
      }}
    />;
  }
}

export default withNavigation(EditJobButton);

const styles = StyleSheet.create({
  button: {
    flexDirection: 'column',
    justifyContent: 'center',
  }
});