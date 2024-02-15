import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './inicio';
import Series from './series';
import Peliculas from './peliculas';

const Stack = createNativeStackNavigator();     

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="inicio" options={{headerShown: false}} component={Inicio} />
      <Stack.Screen name="series" options={{headerShown: false}} component={Series} />
      <Stack.Screen name="peliculas" options={{headerShown: false}} component={Peliculas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

    


