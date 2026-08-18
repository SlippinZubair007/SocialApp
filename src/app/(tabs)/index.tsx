import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../../styles/auth.styles";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Hello</Text>
      <TouchableOpacity  onPress={()=>alert("you touched")}>
        <Text>Press </Text>
      </TouchableOpacity>


      <Link href="/notifications">Notification screen</Link>
      <Link href="/profile">Profile screen</Link>
    </View>
  );
}


