import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

interface TimerToggleButtonProps {
  stopTimer: () => void;
  startTimer: () => void;
  isTimerRunning: boolean;
}

const TimerToggleButton = ({
  stopTimer,
  startTimer,
  isTimerRunning,
}: TimerToggleButtonProps) => {
  const toggleTimer = () => {
    isTimerRunning ? stopTimer() : startTimer();
  };

  return (
    <Pressable onPress={toggleTimer}>
      <View style={styles.container}>
        <FontAwesome
        style={styles.icon}
          name={isTimerRunning ? "pause" : "play"}
          size={125}
          color={"#fff"}
        />
      </View>
    </Pressable>
  );
};
const styles=StyleSheet.create({
    container:{
        borderWidth:5,
        borderColor:'#fff',
        width:250,
        height:250,
        borderRadius:125,
        alignItems:"center",
        justifyContent:'center',
        marginVertical:50
    },
    icon:{
        alignSelf:'center'
    }
})
export default TimerToggleButton;
