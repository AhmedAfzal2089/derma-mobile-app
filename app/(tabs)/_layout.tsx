/* eslint-disable react-hooks/rules-of-hooks */
import { useAuth } from "@/context/AuthProvider";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const _layout = () => {
  const { user, loading } = useAuth();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: "#000000",
        tabBarInactiveTintColor: "#9ca3af", // gray-400

        tabBarStyle: {
          height: 70,
          backgroundColor: "#ffffff",
          borderTopWidth: 0,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 8,
          elevation: 8,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          marginBottom: 8,
        },
        tabBarIconStyle: {
          marginTop: 8,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <FontAwesome name="home" size={22} color={color} style={{ marginBottom: 2 }} />,
        }}
      />
      <Tabs.Screen
        name="refferal"
        options={{
          title: "Treatments",
          tabBarIcon: ({ color }) => <FontAwesome name="gift" size={22} color={color} />,
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
      {user && (
        <Tabs.Screen
          name="(profile)/profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user-circle-o" size={22} color={color} />
            ),
          }}
        />
      )}    
    </Tabs>
  );
};

export default _layout;
