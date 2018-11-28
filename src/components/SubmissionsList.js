// Dependencies
import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';

// User Dependencies
import EditJobButton from './EditJobButton';

export default class SubmissionsList extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  componentDidUpdate() { }

  render() {
    return (
      <FlatList
        style={styles.flatlist}
        data={this.props.submissions}
        extraData={this.props}
        renderItem={({ item, index }) => 
          <View style={[styles.renderItem, {backgroundColor: colors[index % colors.length]}]}>
            <Text style={styles.item}>{item.jobTitle}</Text>
            <EditJobButton editJob={this.props.editJob} jobKey={item.key}/>
          </View>
        }
      />
    );
  }
}

const colors = ['#ffffff', '#DDDDDD'];

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    width: '100%'
  },
  item: {
    paddingTop: 10,
    paddingLeft: 5,
    fontSize: 18,
    height: 44
  },
  renderItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});