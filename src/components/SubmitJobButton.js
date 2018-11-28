import React from 'react';
import { Button } from 'react-native';

import { NavigationActions, StackActions, withNavigation } from 'react-navigation';

class SubmitJobButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("SubmitJobButton this.props", this.props);
    return <Button
      title={"Submit Job"}
      color={'#0C6360'}
      onPress={() => {
        console.log("Pressed Submit Job");
        let job = {
          jobTitle: this.props.jobTitle,
          location: this.props.selectedLocation,
          laborCategory: this.props.selectedLaborCategory,
          quantity: this.props.selectedQuantity,
          shift: this.props.selectedShift,
          startDate: this.props.selectedStartDate,
          notes: this.props.notes
        }
        if (this.props.isEditJob == false) {
          this.props.submitJob(job);
        } else {
          // EDIT submission. DON'T create a new submission
        }

        

        this.props.navigation.navigate("Submissions");
      }}
    />;
  }
}

export default withNavigation(SubmitJobButton);