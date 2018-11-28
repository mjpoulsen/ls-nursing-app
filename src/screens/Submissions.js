// Dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

// User Dependencies
import Actions from '../actions';
import { editJob } from '../actions/SubmitJobActions';
import SubmissionsList from '../components/SubmissionsList';

class Submissions extends React.Component {
  // Sets Screen's Title
  static navigationOptions = {
    title: 'Submissions',
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
    // console.log("Submissions.render()", this.props);
    return (
      <View style={styles.container}>
        <View style={styles.screenTextView}>
          <Text style={styles.screenTitleText}>Your Submissions</Text>
          {/* <Text>Welcome, {this.state.username}!</Text> */}
          {/* <Text>ID: {this.state._id}</Text> */}
        </View>
        <View style={styles.submissionList}>
          <SubmissionsList
            submissions={this.props.submissions}
            editJob={this.props.editJob}
          />
        </View>

      </View>
    );
  }
}

// Obtains the Store's state, extracts values, and passes them to the container (Submissions).
function mapStateToProps(state) {
  let submissionsState = state.submissionsReducer;
  // console.log("SubmissionState", submissionsState);
  return {
    submissions: submissionsState.userSubmissions
  };
}

// Obtains the actions and creators, then passes them to the container (Submssions).
function mapDispatchToProps(dispatch) {
  return bindActionCreators({...Actions.submissionActions, editJob}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Submissions);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signOutButton: {
    padding: 20
  },
  submissionList: {
    flex: 1,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10
  },
  screenTextView: {
    width: '100%',
    paddingBottom: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  screenTitleText: {
    textAlign: 'center',
    fontSize: 14
  }
});
