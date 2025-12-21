import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function CreateTodo() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Add Your Todo</Text>
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
  }
})