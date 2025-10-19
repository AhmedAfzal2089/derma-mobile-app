 
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const _layout = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
      edges={["top", "left", "right", "bottom"]}
    >
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#000000",
          tabBarInactiveTintColor: "#9ca3af",
          tabBarStyle: {
            height: 60,
            backgroundColor: "#ffffff",
            borderTopWidth: 0,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowOffset: { width: 0, height: -2 },
            paddingBottom: 6,
            shadowRadius: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="treatments"
          options={{
            title: "Treatments",
            tabBarIcon: ({ color }) => <FontAwesome name="hospital-o" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="gallery"
          options={{
            title: "Gallery",
            tabBarIcon: ({ color }) => <FontAwesome name="image" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="membership"
          options={{
            title: "Membership",
            tabBarIcon: ({ color }) => <FontAwesome name="id-card" size={22} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => <FontAwesome name="user-circle-o" size={22} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default _layout;
