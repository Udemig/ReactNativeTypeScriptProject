import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TimerModes } from './type'


type Props={
    timerMode:TimerModes;
}

const TimerModeDisplay: React.FC<Props> = ({timerMode}) => {
  return (
    <View>
      <Text style={styles.timerModeText}>{timerMode} Time</Text>
    </View>
  )
}

export default TimerModeDisplay

const styles = StyleSheet.create({
    timerModeText:{
        fontWeight:'800',
        color:'#fff',
        fontSize:40
    }
})