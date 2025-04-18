import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Image } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

import dummyBooks from '@/dummyBooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import PlaybackBar from '@/components/PlayBackBar';
import { useAudioPlayer, useAudioPlayerStatus } from 'expo-audio';

const PlayerScreen = () => {
    const book = dummyBooks[0];
    const player = useAudioPlayer({ uri: book.audio_url });
    const playerStatus = useAudioPlayerStatus(player);


    return (
        <SafeAreaView className='bg-gray-900 items-center justify-center flex-1 gap-10'>
            <Pressable
                className='absolute top-0 left-0 p-2 bg-slate-800 rounded-full'
                onPress={() => router.back()}>
                <Entypo name='chevron-down' size={24} color="white" />
            </Pressable>

            <View className='w-3/5 aspect-square rounded-3xl overflow-hidden'>
                <Image source={{ uri: book.thumbnail_url }} className='w-full h-full' />
            </View>

            <Text className='text-white'>Now Playing</Text>
            <View className="items-center">
                <Text className="text-lg font-semibold text-white">
                    {book.title}
                </Text>
                <Text className="text-base text-gray-400">
                    {book.author}
                </Text>
            </View>

            <View className="w-4/5">
                <PlaybackBar
                    duration={playerStatus.duration}
                    currentTime={playerStatus.currentTime}
                    bufferedTime={5}
                    onSeek={(seconds:number) => player.seekTo(seconds)}
                />
            </View>


            <View className="flex-row justify-between items-center w-4/5">
                <TouchableOpacity onPress={() => player.seekTo(-15)}>
                    <Ionicons name="play-skip-back" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => player.seekTo(-5)}>
                    <Ionicons name="play-back" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        if (playerStatus.playing) {
                            player.pause()
                        } else {
                            player.play();
                        }
                    }}>
                    <Ionicons
                        name={playerStatus.playing ? 'pause' : 'play'}
                        size={40}
                        color="white"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => player.seekTo(5)}>
                    <Ionicons name="play-forward" size={35} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => player.seekTo(15)}>
                    <Ionicons name="play-skip-forward" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default PlayerScreen;