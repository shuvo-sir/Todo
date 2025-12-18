import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Index = () => {
  return (
    <View style={styles.container}>
      <View >
        <Text style= {styles.payel}>Payel akta bolod</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1, // Makes the container take up available space
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  payel:{
       textAlign: "center",
       fontSize: 40,
       color: "red",
       fontStyle: "italic"
  }
})

export default Index;

