import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <Button
        color='red'
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  // const { itemId, otherParam } = route.params

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      console.log('The home screen was just focused!')

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        console.log('The home screen was just unfocused!')
      }
    }, [])
  )

  return (
    <View style={styles.container}>
      {/* <Text>Details Screen for item id: {itemId} and other param: {otherParam}!</Text> */}
      <Text>Details Screen!</Text>
      <Button
        color='red'
        title="Go to Home"
        onPress={() => navigation.navigate('Home', {
          itemId: 86,
          otherParam: 'anything you want here',
        })}
      />
    </View>
  );
}

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'My home' }}
//         />
//         <Stack.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{ title: 'Ze details' }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const Tab = createBottomTabNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{
//             tabBarLabel: 'My Home',
//             tabBarIcon: ({color, size}) => (
//               <Ionicons name="home" size={size} color={color} />
//             )
//           }}
//         />
//         <Tab.Screen
//           name="Details"
//           component={DetailsScreen}
//           options={{
//             tabBarLabel: 'My Details',
//             tabBarIcon: ({color, size}) => (
//               <Ionicons name="settings" size={24} color="black" />
//             )
//           }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Details"
          component={DetailsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App