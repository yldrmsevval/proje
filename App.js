import React, { useState } from "react";
import { View, Picker, StyleSheet, Button, TextInput, FlatList } from "react-native";

let  state = {
  data:[
    {
      bilim: "aefaefae"
    },
    {
      sanat: "asdafaesdgas"
    },
  ],
};

const App = () => {
  const [selectedValue, setSelectedValue] = useState("Seçiniz");
  return (
     
    <View style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 150, width: 250 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
      
        <Picker.Item label="Seçiniz" value="Seçiniz" />
        <Picker.Item label="Bilim" value="bilim" />
        <Picker.Item label="Sanat" value="sanat" />
      </Picker>
      <Button title="Gönder" color="purple"/>
      <TextInput 
      style={{width:200, height: 200, borderColor: 'gray', borderWidth: 5 }}/>
      <FlatList></FlatList>
      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  }
});

export default App;
