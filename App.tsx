import './global.css';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';

import books from './src/dummyBooks';
import { BookListItem } from './src/components/BookListItem';

export default function App() {
  return (
    <View className='flex-1 bg-slate-800 justify-center p-4 pt-16'>
      <FlatList
        data={books}
        renderItem={({ item }) => <BookListItem book={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 16 }}
        className='flex-1'
      />
      <StatusBar style="auto" />
    </View>
  );
}
