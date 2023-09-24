import { View } from "react-native"
import AppButton from "./app/components/AppButton"
import ViewImageScreen from "./app/screens/ViewImageScreen"
import WelcomeScreen from "./app/screens/WelcomeScreen"

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <AppButton title="Login" onPress={() => console.log("click")} />
    </View>
  )
}
