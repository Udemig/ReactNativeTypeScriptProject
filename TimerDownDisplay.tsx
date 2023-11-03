import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


type Props={
  timerDate:Date;
}

const TimerDownDisplay:React.FC<Props> = ({timerDate}) => {
  return (
    <View>
       <Text style={styles.timerCountText}>
        {timerDate.getMinutes().toString().padStart(2, "0")}:
        {timerDate.getSeconds().toString().padStart(2, "0")}
      </Text>
    </View>
  )
}

export default TimerDownDisplay

const styles = StyleSheet.create({

  timerCountText:{
    fontWeight:"800",
    fontSize:40,
    color:'#fff'
  }
})