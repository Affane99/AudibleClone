import { Image, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

import { Book } from "../types/Book";

type BookListItemProps = {
  book: Book;
};

export function BookListItem({ book }: BookListItemProps) {
  return (
    <View className='flex-row gap-4 items-center'>
      <Image source={{ uri: book.thumbnail_url }}
        className='w-16 aspect-square rounded-md'
      />
      <View className='gap-1 flex-1'>
        <Text className='text-2xl text-gray-100'>{book.title}</Text>
        <Text className='text-gray-400'>{book.author}</Text>
      </View>
      <AntDesign name='playcircleo' size={24} color='gainsboro' />
    </View>
  )
}