import { StatusBar } from 'expo-status-bar';
import { View, FlatList } from 'react-native';

import books from '@/dummyBooks';
import { BookListItem } from '@/components/BookListItem';

export default function App() {
  return (
      <FlatList
        data={books}
        renderItem={({ item }) => <BookListItem book={item} />}
        keyExtractor={(item) => item.id}
        contentContainerClassName='gap-4 p-4'
        
      />
      // <StatusBar style="auto" />
  );
}
