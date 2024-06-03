import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Water from './components/Water';

function HomeScreen({ navigation }) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
        title="Go to Water"
        onPress={() => navigation.navigate('Water')}
    />
    </View>
);
}

const Stack = createNativeStackNavigator();

function App() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Water" component={Water} options={{ title: 'Bwar c bon' }}/>
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;