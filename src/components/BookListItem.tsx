import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";

import { Book } from "../types/Book";
import { usePlayer } from "@/providers/PlayerProvider";

type BookListItemProps = {
  book: Book;
};

export function BookListItem({ book }: BookListItemProps) {

  const { setBook } = usePlayer();

  return (
    <Pressable
      className='flex-row gap-4 items-center'
      onPress={() => setBook(book)}
    >
      <Image source={{ uri: book.thumbnail_url }}
        className='w-16 aspect-square rounded-md'
      />
      <View className='gap-1 flex-1'>
        <Text className='text-lg text-gray-100'>{book.title}</Text>
        <Text className='text-gray-400'>{book.author}</Text>
      </View>
      <AntDesign name='playcircleo' size={24} color='gainsboro' />
    </Pressable>
  )
}