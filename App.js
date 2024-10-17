import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './app/Screen/LoginSreen/LoginScreen';
import HomeScreen from './app/Screen/HomeScreen/HomeScreen';
import ChamCong from './app/Screen/MarkAttendaceScreen/MarkAttendace';
import ChamCongNV from './app/Screen/MarkAttendaceScreen/MarkAttendaceNV';
import EmployeeScreen from './app/Screen/HomeScreen/MangageEmployeeScreen';
import ListEmployee from './app/Screen/EmployeeScreen/ListEmployee';
import EmployeeDetailScreen from './app/Screen/EmployeeScreen/EmployeeDetail';
import EmployeeEditScreen from './app/Screen/EmployeeScreen/EditEmployee';
import PhongBanScreen from './app/Screen/DepartmentsScreen/DepartmentsScreen';
import { useFonts } from 'expo-font';
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'FBold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'FMedium': require('./assets/fonts/JosefinSans-Medium.ttf'),
    'FRegular': require('./assets/fonts/JosefinSans-Regular.ttf'),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PhongBanScreen">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ChamCong" component={ChamCong} options={{ headerShown: false }} />
        <Stack.Screen name="ChamCongNV" component={ChamCongNV} options={{ headerShown: false }} />
        <Stack.Screen name="EmployeeScreen" component={EmployeeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ListEmployee" component={ListEmployee} options={{ headerShown: false }} />
        <Stack.Screen name="EmployeeDetail" component={EmployeeDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditEmployee" component={EmployeeEditScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhongBanScreen" component={PhongBanScreen} options={{ headerShown: false }} />
      </Stack.Navigator>  
    </NavigationContainer>
    <StatusBar style="auto" />
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
});
