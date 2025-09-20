import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Signup() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Signup Screen</Text>
      <Link href="/(auth)/login">Go to Login</Link>
    </View>
  );
}
