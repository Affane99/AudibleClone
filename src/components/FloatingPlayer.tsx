import { Image, Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";

import { Book } from "../types/Book";
import dummyBooks from '@/dummyBooks';
import { useAudioPlayer, useAudioPlayerStatus } from "expo-audio";

type FloatingPlayerProps = {
  book?: Book;
};

export function FloatingPlayer({ book }: FloatingPlayerProps) {
  book = book || dummyBooks[0];
  const player = useAudioPlayer({ uri: book.audio_url });
  const playerStatus = useAudioPlayerStatus(player);

  return (
    <Link href={`/player`} asChild className="bg-gray-900 p-2">
      <Pressable className='flex-row gap-4 items-center'>
        <Image source={{ uri: book.thumbnail_url }}
          className='w-16 aspect-square rounded-md'
        />
        <View className='gap-1 flex-1'>
          <Text className='text-2xl text-gray-100'>{book.title}</Text>
          <Text className='text-gray-400'>{book.author}</Text>
        </View>
        <AntDesign
          name={playerStatus.playing ? 'pausecircleo' : 'playcircleo'}
          size={24}
          color='gainsboro'
          onPress={() => {
            if (playerStatus.playing) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </Pressable>
    </Link>
  )
}