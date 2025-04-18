import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const PlayerScreen = () => {
    return (
        <View className='bg-gray-900 items-center justify-center flex-1'>
            <Pressable
                className='absolute top-0 left-0 p-2 bg-slate-800 rounded-full' 
                onPress={() => router.back()}>
                <Entypo name='chevron-down' size={24} color="white" />
            </Pressable>

            <Text className='text-white'>Now Playing</Text>
            <View className="items-center mb-10">
                <Text className="text-lg font-semibold text-white">Audio Title</Text>
                <Text className="text-base text-gray-400">Author Name</Text>
            </View>
            <View className="flex-row justify-between w-3/5">
                <TouchableOpacity>
                    <Ionicons name="play-back" size={40} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play" size={50} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="play-forward" size={40} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default PlayerScreen;