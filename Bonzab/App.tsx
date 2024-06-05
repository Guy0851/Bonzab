import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import Water from './components/Water';

// Définissez les types pour les paramètres de navigation
type RootStackParamList = {
Home: undefined;
Water: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeScreenProps) {
return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button
        title="Go to Drink Reminder"
        onPress={() => navigation.navigate('Water')}
    />
    </View>
);
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
return (
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Water" component={Water} options={{ title: 'Drink Reminder' }} />
    </Stack.Navigator>
    </NavigationContainer>
);
}

export default App;