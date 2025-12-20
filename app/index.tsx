import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

const initialTodo: Todo[] = [
  {id: 1, text: "leaen React Native", done: true},
  {id: 2, text: "Learn React", done: false},
];  


const Index = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodo)
  return (
    <View>
      <View>
        <Text>Todos</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
})

export default Index;

