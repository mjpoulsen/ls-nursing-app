// Dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// User Dependencies
import Actions from '../actions';
import { onSignIn } from "../utils/auth";

class SignIn extends React.Component {
  // Sets Screen's Title
  static navigationOptions = {
    title: 'Login',
    headerLeft: null
  };

  constructor(props) {
    super(props);

    this.state = {
      username: 'mark',
      password: '',
      signedIn: false,
      checkedSignIn: false
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scrollView"
          style={styles.scrollView}
          keyboardShouldPersistTaps={'handled'}
        >
          <View style={styles.screenTextView}>
            <Text style={styles.screenTitleText}>Please Sign In to Submit Jobs.</Text>
          </View>
          <View style={styles.textInputView}>
            <TextInput
              onChangeText={(text) => this.props.setUsernameInput(text)}
              value={this.props.username}
              placeholder={'Username...'}
              editable={true}
              maxLength={20}
              underlineColorAndroid={'transparent'}
              textBreakStrategy={'simple'}
              style={styles.textInput}
            />
            <TextInput
              onChangeText={(text) => this.props.setPasswordInput(text)}
              value={this.props.password}
              placeholder={'Password...'}
              editable={true}
              maxLength={20}
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
              textBreakStrategy={'simple'}
              style={styles.textInput}
            />
          </View>
          <View style={styles.buttonView}>
            <Button
              buttonStyle={{ marginTop: 20 }}
              title="Sign In"
              color={'#0C6360'}
              onPress={() => {
                onSignIn()
                  .then(() => {
                    console.log("Pressed SIGN IN");
                    this.props.signIn();
                    this.props.navigation.navigate("SignedIn");
                  }
                  );
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// Obtains the Store's state, extracts values, and passes them to the container (SignIn).
function mapStateToProps(state) {
  let signInState = state.signInReducer;
  return {
    username: signInState.username,
    password: signInState.password
  };
}

// Obtains the actions and creators, then passes them to the container (SignIn).
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions.signInActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  buttonView: {
    width: '100%',
    padding: 5
  },
  textInputView: {
    width: '100%',
    padding: 10,
  },
  textInput: {
    flexDirection: 'row',
    textAlignVertical: 'top',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    fontSize: 14
  },
  screenTextView: {
    width: '100%',
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  screenTitleText: {
    textAlign: 'center',
    fontSize: 14
  },
});
