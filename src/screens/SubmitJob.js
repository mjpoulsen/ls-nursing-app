// Dependencies
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Calendar from '../components/Calendar';

// User Dependencies
import Actions from '../actions';

class NotesTextInput extends React.Component {
  render() {
    const style = {
      borderWidth: 0.5,
      borderColor: 'gray',
      flexDirection: 'row',
      textAlignVertical: 'top',
      width: '100%'
    };
    return (
      <TextInput
        {...this.props}
        editable={true}
        maxLength={250}
        underlineColorAndroid={'transparent'}
        textBreakStrategy={'simple'}
        style={style}
      />
    );
  }
}

class SubmitJob extends React.Component {
  // Sets Screen's Title
  static navigationOptions = {
    title: 'Sumbit a Job',
  };

  constructor(props) {
    super(props);

    // ?? Is this necessary?? 'navigation' isn't referenced within the code
    // Get Params from Submission screen.
    // const { navigation } = this.props;

    // console.log("this.props", this.props);

    // ?? in RNPickerSelect example
    this.inputRefs = {};
  }

  render() {
    const cancelEditButton =
      <View style={styles.submitButton}>
        <Button
          title={'Cancel Edit'}
          color={'#0C6360'}
          onPress={() => {
            this.props.navigation.navigate("Submissions");
            this.refs.scrollView.scrollTo({ x: 0, y: 0, animated: false });
            this.props.cancelEdit();
          }}
        />
      </View>;

    // console.log("SubmitJob.render() this.props.isEditJob", this.props.isEditJob);

    return (
      <View style={styles.container}>
          <ScrollView
            ref="scrollView"
            style={styles.scrollView}
            keyboardShouldPersistTaps={'handled'}
          >
            <KeyboardAvoidingView
              style={{ flex: 1 }}
              behavior="padding"
              enabled>
              <Text style={{ fontSize: 14, paddingBottom: 5, textAlign: 'center' }}>Please fill out the form below.</Text>
              <TextInput
                onChangeText={(text) => this.props.setJobTitle(text)}
                value={this.props.jobTitle}
                placeholder={'Submission Title...'}
                editable={true}
                maxLength={64}
                underlineColorAndroid={'transparent'}
                textBreakStrategy={'simple'}
                style={styles.jobTitle}
              />
              <View style={styles.pickers}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Select a Location...',
                    value: null
                  }}
                  items={this.props.locations}
                  onValueChange={(value) => {
                    this.props.selectLocation(value);
                  }}
                  onUpArrow={() => {
                    this.inputRefs.name.focus();
                  }}
                  onDownArrow={() => {
                    this.inputRefs.picker2.togglePicker();
                  }}
                  style={{ ...pickerSelectStyles }}
                  value={this.props.selectedLocation}
                  ref={(el) => {
                    this.inputRefs.picker = el;
                  }}
                />
                <RNPickerSelect
                  placeholder={{
                    label: 'Select a Job...',
                    value: null
                  }}
                  items={this.props.laborCategories}
                  onValueChange={(value) => {
                    this.props.selectLaborCategory(value);
                  }}
                  onUpArrow={() => {
                    this.inputRefs.name.focus();
                  }}
                  onDownArrow={() => {
                    this.inputRefs.picker2.togglePicker();
                  }}
                  style={{ ...pickerSelectStyles }}
                  value={this.props.selectedLaborCategory}
                  ref={(el) => {
                    this.inputRefs.picker = el;
                  }}
                />
                <RNPickerSelect
                  placeholder={{
                    label: 'Select a Shift...',
                    value: null
                  }}
                  items={this.props.shifts}
                  onValueChange={(value) => {
                    this.props.selectShift(value);
                  }}
                  onUpArrow={() => {
                    this.inputRefs.name.focus();
                  }}
                  onDownArrow={() => {
                    this.inputRefs.picker2.togglePicker();
                  }}
                  style={{ ...pickerSelectStyles }}
                  value={this.props.selectedShift}
                  ref={(el) => {
                    this.inputRefs.picker = el;
                  }}
                />
              </View>
              <View style={styles.quantityView}>
                <TextInput
                  clearTextOnFocus={true}
                  keyboardType={'numeric'}
                  onChangeText={(text) => this.props.selectQuantity(text)}
                  value={this.props.selectedQuantity}
                  placeholder={'Quantity...'}
                  editable={true}
                  maxLength={2}
                  underlineColorAndroid={'transparent'}
                  textBreakStrategy={'simple'}
                  style={styles.quantity}
                />
              </View>
              <View style={styles.calendar}>
                <Text style={styles.startDateText}>Anticipated Start Date</Text>
                <Calendar
                  currentDate={this.props.currentDate}
                  markedDate={this.props.markedDate}
                  selectStartDate={this.props.selectStartDate}
                />
              </View>
              <View style={styles.notesTextInput}>
                <NotesTextInput
                  multiline={true}
                  numberOfLines={6}
                  onChangeText={(text) => this.props.setJobNotes(text)}
                  value={this.props.notes}
                  placeholder={'Notes...'}
                />
              </View>
              <View style={styles.submitButton}>
                <Button
                  title={"Submit Job"}
                  color={'#0C6360'}
                  onPress={() => {
                    let job = {
                      jobTitle: this.props.jobTitle,
                      location: this.props.selectedLocation,
                      laborCategory: this.props.selectedLaborCategory,
                      quantity: this.props.selectedQuantity,
                      shift: this.props.selectedShift,
                      startDate: this.props.selectedStartDate,
                      notes: this.props.notes
                    }

                    if (this.props.isEditJob == true) {
                      job['key'] = this.props.jobKey;
                    }

                    console.log("Submit Job Button -- job", job);

                    this.props.submitJob(job);
                    this.refs.scrollView.scrollTo({ x: 0, y: 0, animated: false });
                    this.props.navigation.navigate("Submissions");
                  }}
                />
              </View>
              {(this.props.isEditJob == true) ? cancelEditButton : null}
            </KeyboardAvoidingView>
          </ScrollView>
      </View>
    );
  }
}

// Obtains the Store's state, extracts values, and passes them to the container (SubmitJob).
function mapStateToProps(state) {
  let submitJobState = state.submitJobReducer;
  // console.log("SubmitJobState", submitJobState);
  return {
    submitJob: state.submitJobReducer,
    jobTitle: submitJobState.jobTitle,
    locations: submitJobState.locations,
    laborCategories: submitJobState.laborCategories,
    notes: submitJobState.notes,
    shifts: submitJobState.shifts,
    selectedLocation: submitJobState.selectedLocation,
    selectedLaborCategory: submitJobState.selectedLaborCategory,
    selectedQuantity: submitJobState.selectedQuantity,
    selectedShift: submitJobState.selectedShift,
    selectedStartDate: submitJobState.selectedStartDate,
    submitJob: submitJobState.submitJob,
    markedDate: submitJobState.markedDate,
    currentDate: submitJobState.currentDate,
    isEditJob: submitJobState.isEditJob,
    jobKey: submitJobState.jobKey
  };
}

// Obtains the actions and creators, then passes them to the container (SubmitJob).
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions.submitJobActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitJob);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 7,
    backgroundColor: '#ffffff',
    paddingTop: 10,
    paddingBottom: 10,
  },
  notesTextInput: {
    flex: 1,
    alignItems: 'flex-start',
    width: '100%',
  },
  scrollView: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff'
  },
  submitButton: {
    flex: 1,
    padding: 5
  },
  jobTitle: {
    flexDirection: 'row',
    textAlignVertical: 'top',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  quantityView: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  quantity: {
    flexDirection: 'row',
    textAlignVertical: 'top',
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray'
  },
  startDateText: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    textAlign: 'center',
    fontSize: 14
  },
  pickers: {
    flex: 1,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingBottom: 10
  },
  calendar: {
    flex: 1,
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'gray'
  }
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 5,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
});