import { StatusBar } from 'expo-status-bar';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, TextInput, FlatList, onChange, ScrollView, Text } from "react-native";

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
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
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
        <View style={styles.flatlist}>
            <FlatList 
             keyExtractor={(item, index) => item.id} 
             data={courseGoals} 
             renderItem={itemData=>( 
           <View>
             <Text>{itemData.item.value}</Text> 
           </View> )} />
        
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
      
    },
    flatlist: {
      backgroundColor: '#ccc',
      alignItems: 'center',
      marginVertical: 10,  
      borderColor: 'black',
      borderWidth: 1,
      padding: 10,
      paddingHorizontal: 10
    }



});

