import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GoalItem = props => {
    return <View>
    <Text>{selectedValue}</Text>
    <Text>{props.title}</Text> 
  </View>;
};

const styles = StyleSheet.create({
 flatlist: {
    backgroundColor: '#ccc',
    alignItems: 'center',
    marginVertical: 10,  
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 10
  }});

export default GoalItem;