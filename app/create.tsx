import { AppButton } from '@/components';
import { TodoContext } from '@/context/Todo.context';
import React, { use } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';


export default function CreateTodo() {
   const [text, setText] = React.useState("");
   const {addTodo} = use(TodoContext);

   const handleAddTodo = () => {
       if(!text){
          Alert.alert("Error", "Please enter a Todo item.");
          return;
       }

        // Add todo logic here
        addTodo?.(text);
        setText("");
        Alert.alert("Success", "Todo item added successfully.");
     }

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
        onPress={handleAddTodo}
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