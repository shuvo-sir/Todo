import { AppButton } from '@/components';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function CreateTodo() {
   const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Your Todo</Text>

    <View style={styles.formContainer}>
      <TextInput
        label="Add Your Todo"
        value={text}
        onChangeText={text => setText(text)}
        mode='outlined'
      />

      <AppButton
        onPress={() => {}}
      >
        Create Todo
      </AppButton>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 20,
    gap: 20,
  }
})