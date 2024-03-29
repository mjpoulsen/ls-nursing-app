// https://github.com/wix/react-native-calendars

import React from 'react';
import { StyleSheet, View } from 'react-native';

import { Calendar } from 'react-native-calendars';

export default class JobCalendar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  componentDidMount() {
   
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Calendar
          // Initially visible month. Default = Date()
          current={this.props.currentDate}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={new Date()}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          // maxDate={'2019-05-30'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={(day) => {
            this.props.selectStartDate(day.dateString);
          }}
          // Handler which gets executed on day long press. Default = undefined
          // onDayLongPress={(day) => {console.log('selected day', day)}}
          // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
          monthFormat={'MMM yyyy'}
          // Handler which gets executed when visible month changes in calendar. Default = undefined
          onMonthChange={(month) => {console.log('month changed', month)}}
          // Hide month navigation arrows. Default = false
          // hideArrows={true}
          // Replace default arrows with custom ones (direction can be 'left' or 'right')
          // renderArrow={(direction) => (<Arrow />)}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
          // day from another month that is visible in calendar page. Default = false
          disableMonthChange={false}
          // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
          firstDay={0}
          // Hide day names. Default = false
          // hideDayNames={true}
          // Show week numbers to the left. Default = false
          // showWeekNumbers={true}
          // Handler which gets executed when press arrow icon left. It receive a callback can go back month
          // onPressArrowLeft={substractMonth => substractMonth()}
          // Handler which gets executed when press arrow icon left. It receive a callback can go next month
          // onPressArrowRight={addMonth => addMonth()}
          style={{width: '100%'}}
          // An object of objects that specifies which dates are marked as well as their style.
          // e.g. {'2012-05-16': {selected: true, marked: true, selectedColor: 'blue'}}
          markedDates={this.props.markedDate}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
