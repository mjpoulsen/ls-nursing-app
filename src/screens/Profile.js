// Dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// User Dependencies
import Actions from '../actions';
import ChangePasswordButton from '../components/ChangePasswordButton';
import SignOutButton from '../components/SignOutButton';

class Profile extends React.Component {
  // Sets Screen's Title
  static navigationOptions = {
    title: 'Profile',
  };

  constructor(props) {
    super(props);

    // Get Params from Login screen.
    const { navigation } = this.props;

    this.state = {
      _id: navigation.getParam('_id', '-1'),
      username: navigation.getParam('username', 'Username not provided'),
      flatListData: []
    }
  }

  componentDidMount() {
  }

  render() {
    // console.log("Profile.render()", this.props);
    return (
      <View style={styles.container}>
        <ScrollView
          ref="scrollView"
          style={styles.scrollView}
          keyboardShouldPersistTaps={'handled'}
        >
          <View style={styles.screenTextView}>
            <Text style={styles.screenTitleText}>Your Profile</Text>
            {/* <Text>Welcome, {this.state.username}!</Text> */}
            {/* <Text>ID: {this.state._id}</Text> */}
          </View>
          <View style={styles.passwordView}>
            <TextInput
              onChangeText={(text) => this.props.setPasswordInput(text)}
              value={this.props.password}
              placeholder={'New Password...'}
              editable={true}
              maxLength={20}
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
              textBreakStrategy={'simple'}
              style={styles.password}
            />
            <TextInput
              onChangeText={(text) => this.props.setConfirmPasswordInput(text)}
              value={this.props.confirmPassword}
              placeholder={'Confirm Password...'}
              editable={true}
              maxLength={20}
              secureTextEntry={true}
              underlineColorAndroid={'transparent'}
              textBreakStrategy={'simple'}
              style={styles.password}
            />
          </View>
          <View style={styles.buttonView}>
            <ChangePasswordButton changePassword={this.props.changePassword} style={styles.signOutButton} />
          </View>
          <View style={styles.buttonView}>
            <SignOutButton signedOutProfile={this.props.signedOutProfile} style={styles.signOutButton} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// Obtains the Store's state, extracts values, and passes them to the container (Submissions).
function mapStateToProps(state) {
  let profileState = state.profileReducer;
  // console.log("ProfileState", profileState);
  return {
    password: profileState.password,
    confirmPassword: profileState.confirmPassword
  };
}

// Obtains the actions and creators, then passes them to the container (Submssions).
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions.profileActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  signOutButton: {
    padding: 20
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
  passwordView: {
    width: '100%',
    padding: 10,
  },
  password: {
    flexDirection: 'row',
    textAlignVertical: 'top',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  buttonView: {
    width: '100%',
    padding: 5
  }
});
