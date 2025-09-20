/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";

const _layout = () => {
  const colorScheme = useColorScheme();

  const isDark = true;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: isDark ? "#ffffff" : "#111111",
        tabBarInactiveTintColor: isDark ? "#7f7f7f" : "#a1a1aa", // Tailwind's gray-500/400
        tabBarStyle: {
          position: "absolute",
          bottom: 0,
          left: 20,
          right: 20,
          height: 70,
          backgroundColor: isDark ? "#18181b" : "#ffffff", // Tailwind's zinc-900 / white
          // borderRadius: 12,
          paddingBottom: 70,
          // marginBottom : 36,
          paddingTop: 10,
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.12,
          shadowOffset: { width: 0, height: 6 },
          shadowRadius: 12,
          elevation: 10, // For Android
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          gap: 4,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="refferal"
        options={{
          title: "Referral",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="gift" size={size} color={color} />
          ),
        }}
      />
      {/* From where this size is coming? */}
      <Tabs.Screen
        name="bookings"
        options={{
          title: "Bookings",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="calendar" size={21} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
