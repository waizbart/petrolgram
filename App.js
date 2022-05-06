import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Posts from "./src/pages/Posts/";
import NewPost from "./src/pages/NewPost";
import Details from "./src/pages/Details";

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Posts">
        <Stack.Screen
          name="Posts"
          component={Posts}
          options={{
            headerTintColor: "#00a680",
          }}
        />
        <Stack.Screen
          name="New Post"
          component={NewPost}
          options={{
            headerTintColor: "#00a680",
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerTintColor: "#00a680",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
