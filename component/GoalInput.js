import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
const GoalInput = props => {
    return (   
         <View>
        <TextInput
          placeholder="  Bir şeyler paylaş..."
          onChangeText={goalInputHandler}
          value={enteredGoal}
          style={styles.textinput}/>   
      </View>
      <View style={styles.button}>
        <Button title="Gönder" color="purple" onPress={addGoalHandler} />
      </View>
      );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 10,
    justifyContent: 'flex-end',

  },
  textinput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 390,
    height: 110,
    borderColor: 'grey',
    borderWidth: 5,
    fontSize: 20,
    fontStyle: 'normal',
    backgroundColor: 'black',
    padding:10,
    
  }});

export default GoalInput;