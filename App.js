import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TransactionsContextProvider from "./store/transactions-context";

import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import NotificationScreen from "./screens/NotificationsScreen";
import AboutScreen from "./screens/AboutScreen";
import IdentifyLocationScreen from "./screens/IdentifyLocationScreen";
import DonationRequsetSuccessScreen from "./screens/DonationRequsetSuccessScreen";
import TransactionDetailsScreen from "./screens/TransactionDetailsScreen";
import NotificationDetails from "./screens/NotificationDetails";
import TransactionHistoryScreen from "./screens/TransactionHistoryScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

import AuthContextProvider, { AuthContext } from "./store/auth-context";
import { useContext } from "react";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#379d42" },
        headerTintColor: "#fff",
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{
          title: "Registration",
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedDonorStack />}
    </NavigationContainer>
  );
}

function DonorDrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#379d42" },
        headerTintColor: "#fff",
        sceneContainerStyle: { backgroundColor: "#fff" },
        drawerContentStyle: { backgroundColor: "#379d42" },
        drawerInactiveTintColor: "#fff",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          title: "Home",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name='home' size={size} color={color} />;
          },
          // headerShown: false,
        }}
      />

      <Drawer.Screen
        name='Settings'
        component={SettingsScreen}
        options={{
          title: "Account",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name='person-sharp' size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name='Notifications'
        component={NotificationScreen}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Ionicons name='notifications' size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name='History'
        component={TransactionHistoryScreen}
        options={{
          title: "History",
          drawerIcon: ({ size, color }) => {
            return (
              <Ionicons name='time-sharp' size={size} color={color} />
            );
          },
        }}
      />
      <Drawer.Screen
        name='About'
        component={AboutScreen}
        options={{
          title: "About",
          drawerIcon: ({ size, color }) => {
            return (
              <Ionicons
                name='information-circle-sharp'
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
}

function AuthenticatedDonorStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#379d42" },
        headerTintColor: "#fff",
        cardStyle: { backgroundColor: "#fff" },
      }}
    >
      <Stack.Screen
        name='Home'
        component={DonorDrawerNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='IdentifyLocationScreen'
        component={IdentifyLocationScreen}
        options={{
          title: "Identify Location",
        }}
      />
      <Stack.Screen
        name='DonationRequsetSuccessScreen'
        component={DonationRequsetSuccessScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name='TransactionDetailsScreen'
        component={TransactionDetailsScreen}
        options={{
          // headerShown: false,
          presentation: "modal",
          title: "Transaction Details",
        }}
      />
      <Stack.Screen
        name='NotificationDetailsScreen'
        component={NotificationDetails}
        options={{
          // headerShown: false,
          presentation: "modal",
          title: "Notification Details",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='dark' />

      <TransactionsContextProvider>
        <AuthContextProvider>
          <Navigation />
        </AuthContextProvider>
      </TransactionsContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
