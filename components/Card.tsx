import { Todo, TodoContext } from '@/context/Todo.context';
import React, { useContext } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';


interface CardProps {
  todo: Todo;
}


export default function Card({ todo }: CardProps) {


const date = new Date(todo.timestamp!);

const formattedDate = date.toLocaleDateString("en-BD", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

const formattedTime = date.toLocaleTimeString("en-BD", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

const {removeTodo, toggleTodo} = useContext(TodoContext);

const handleRemoveTodo = (id: number) => {
  Alert.alert(
    "Delete",
    "Are you sure you want to delete?",
    [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", onPress: () => removeTodo?.(id) }
    ]
  );
}

  return (
    
    <TouchableOpacity
      onLongPress={() => handleRemoveTodo(todo.id)}
      activeOpacity={0.5} 
      key={todo.id} 
      style={styles.todoCard}>
                <Checkbox.Item 
                  label="" 
                  status={todo.done ? "checked" : "unchecked"}
                  onPress={() => toggleTodo?.(todo.id)} 
                />

                <Text style={styles.todoTitle}>{todo.text}</Text>
                <Text style={styles.timeText}>
                  <Text style={styles.dateText}>{formattedDate}</Text>
                  {"\n"}
                  <Text style={styles.clockText}>{formattedTime}</Text>
              </Text>

    </TouchableOpacity>
  );
} 

const styles = StyleSheet.create({
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
  timeText: {
    marginTop: 4,
  },

  dateText: {
    color: "#4f0949ff",
    fontSize: 12,
  },

  clockText: {
    color: "#084a5aff",
    fontSize: 13,
    fontWeight: "600",
  },
});