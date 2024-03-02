import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {
  const [counter, setCounter] = useState<number>(0)
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Counter Application
      </Text>
      <Text style={[styles.header, { color: 'blue' }]}>
        {counter}
      </Text>
      <Button
        onPress={() => {
          setCounter(counter + 1)
        }}
        title="Increment"
        color="#841584"
      />
      <Button
        onPress={() => {
          setCounter(counter > 0 ? counter - 1 : 0)
        }}
        title="Decrement"
        color="#841584"
      />
    </View>
  )
}

export default Counter

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: "center", alignItems: "center"
  },
  header: {
    fontSize: 24, fontWeight: 'bold', color: 'red'
  }
})