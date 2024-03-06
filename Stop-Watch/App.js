import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { useState } from 'react';
import bgimg from './assets/436.png';

export default function counter() {
  const [readCount ,updateCount] = useState(0);
  function handleCounter(){
      updateCount(readCount+1);
  }
  function minus(){
    if(readCount==0)
    return;
    else {
    updateCount(readCount-1);
    return;
    }
    // updateCount(readCount-1);
}
 function reset(){
    updateCount(0);
 }
  return (
    // <View style={styles.container}>
      <ImageBackground source={bgimg} style={styles.container}>
      <View style={styles.dial}>
      <Text style={styles.text}>{readCount}</Text>
      </View>
      <StatusBar style="auto" />
      <View style={styles.buttoncontainer}>
      <TouchableOpacity style={styles.button} onPress={(handleCounter)}><Text style={styles.head}>Plus</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={(minus)}><Text style={styles.head}>Minus</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={(reset)}><Text style={styles.head}>Reset</Text></TouchableOpacity>
      </View>
     </ImageBackground>
    //  </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dial:{
    width:200,
    height:200,
    backgroundColor:'white',
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    shadowOpacity: 20,
  },
  buttoncontainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    padding: 10,
    height: "6%",
    flexWrap: "wrap",
  },
  button: {
    backgroundColor: "yellow",
    width: "40%",
    alignItems: "center",
    height: "200%",
    justifyContent:'center',
    borderWidth: "2",
    borderColor: "red",
    margin: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: '100',
  },
  head: {
    fontSize: '20',
    fontWeight: 'bold',
    color: 'black',
  }
  });
