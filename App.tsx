import './global.css';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import books from './src/dummyBooks';
import { BookListItem } from './src/components/BookListItem';

export default function App() {
  return (
    <View className='flex-1 bg-slate-800 justify-center p-4 gap-4'>
      {/* Book row */}
      <BookListItem book={books[0]} />
      <BookListItem book={books[1]} />
      <BookListItem book={books[2]} />
      <BookListItem book={books[3]} />

      <StatusBar style="auto" />
    </View>
  );
}
