import './global.css';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className='flex-1 bg-slate-800 items-center justify-center'>
      <Text className='text-2xl text-gray-100'>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}
