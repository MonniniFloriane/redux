const Stack = createStackNavigator();
import { Provider } from "react-redux";
import Store from './store/configStore';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name='Homescreen'
          component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
