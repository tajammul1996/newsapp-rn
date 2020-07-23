import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from "./src/components/Dashboard";
import NewsDesc from "./src/components/NewsDesc";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="NewsDescription" component={NewsDesc} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;