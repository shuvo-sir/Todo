import Card from '@/components/Card';
import { TodoContext } from '@/context/Todo.context';
import { Link } from 'expo-router';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppButton } from '../components';



const Index = () => {
  const {todos} = useContext(TodoContext);
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoHeader}>Todos</Text>


        {todos.reverse().map((todo) => (
         <Card key={todo.id} todo={todo} />
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
    noTodos: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#888",
    marginTop: 5,
  },

})


export default Index;

