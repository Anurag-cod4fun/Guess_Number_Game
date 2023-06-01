import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Title from '../components/Title'

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title children={"Opponent's Guess"}/>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginTop: 25,
        padding: 24,
    },
    
})