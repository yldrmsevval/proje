import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, TextInput, FlatList, onChange, Text } from "react-native";
import GoalItem from './component/GoalItem';

export default App = () => {
  const [selectedValue, setSelectedValue] = useState("Seçiniz");
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [
      ...currentGoals, 
      {id: Math.random().toString(),value:enteredGoal}
    ]);
  };

  return (

    <View>
      <View style={{alignItems:'center',}} >
        <Picker
          selectedValue={selectedValue}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) => 
          setSelectedValue(itemValue)}
        >
          <Picker.Item label="Konu Başlığı Seçiniz" value="Seçiniz"/>
          <Picker.Item label="Gündem" value="gündem"/>
          <Picker.Item label="Spor" value="eğlence"/>
          <Picker.Item label="Sanat" value="sanat"/>
          <Picker.Item label="TV ve Filmler" value="tvvefilmler"/>
          <Picker.Item label="Yemek" value="yemek"/>
          <Picker.Item label="Müzik" value="müzik"/>
          <Picker.Item label="Seyahat" value="seyahat"/>
        </Picker>
      </View>
  
        <View style={styles.flatlist}>
            <FlatList 
             keyExtractor={(item, index) => item.id} 
             data={courseGoals} 
             renderItem={itemData=> <GoalItem title={itemData.item.value}/>} />
        
        </View>

    </View>

  );
}

const styles = StyleSheet.create({
    picker: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 300,
      height: 110,
      margin:10,
      padding:10
    },
    
    



});

