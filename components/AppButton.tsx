import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';



interface AppButtonProps {
  onPress?: () => void;
  children: string;
}

export default function AppButton({ 
    onPress = () => {},
    children = "Create Todo" }: AppButtonProps) {
  return (

    <TouchableOpacity 
        style={styles.createTodoButton}
        activeOpacity={0.6}
        onPress={onPress}
    >
            <Text style={styles.createTodoButtonText}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
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