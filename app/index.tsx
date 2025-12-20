import { Link } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodo: Todo[] = [
  {id: 1, text: "leaen React Native", done: true},
  {id: 2, text: "Learn React", done: false},
];  
initialTodo

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodo);
  return (
    <View style={styles.container}>
      <View style={styles.todoContainer}>
        <Text style={styles.todoHeader}>Todos</Text>


        {todos.map((todo) => (
          <View key={todo.id} style={styles.todoCard}>
            <Text style={styles.todoTitle}>{todo.text}</Text>
          </View>
        ))}
      </View>
      <View>
        <Link asChild href="/create">
          <TouchableOpacity style={styles.createTodoButton}
          activeOpacity={0.6}>
            <Text style={styles.createTodoButtonText}>Create Todo</Text>
          </TouchableOpacity>
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
    justifyContent: "space-between",
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

  // create todo button styles
  createTodoButton: {
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 12,
    margin: 10,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
  },

  createTodoButtonText: {
    color: "#fff",
    fontSize: 18,
  },
})


export default Index;

