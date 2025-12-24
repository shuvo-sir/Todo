import { TodoContext } from '@/context/Todo.context';
import { Link } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { AppButton } from '../components';



const Index = () => {
  const {todos} = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoHeader}>Todos</Text>


        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoCard}>
             <Checkbox.Item label="" status="unchecked" />
            <Text style={styles.todoTitle}>{todo.text}</Text>
          </View>
        ))}
        {todos.length === 0 && (<Text style={styles.noTodos}>No todos available. Create one!</Text>)}
      </View>
      <View>
        <Link asChild href="/create">
          <AppButton
          onPress={() => {}}
          >Create Todo</AppButton>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },

  todoContainer: {
    marginVertical: 5,
    padding: 10,
  },

  todoHeader: {
    fontSize: 24,
    fontWeight: "bold", 
  },

  // todo card styles
  todoCard: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    elevation: 2,
  },
  
  todoTitle: {
    fontSize: 18,
    fontWeight: "500",
  },
  noTodos: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#888",
    marginTop: 5,
  },
 
})


export default Index;

