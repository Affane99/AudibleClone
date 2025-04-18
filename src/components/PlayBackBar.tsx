import { useState } from 'react';
import { GestureResponderEvent, LayoutChangeEvent, Pressable, Text, View } from 'react-native';

type PlaybackBarProps = {
  duration: number;
  currentTime: number;
  bufferedTime?: number;
  onSeek: (seconds: number) => void;
}

export default function PlaybackBar({ duration, currentTime, bufferedTime, onSeek }: PlaybackBarProps) {
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const progress = currentTime / duration;

  function formatTime(currentTime: number): React.ReactNode {
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  function handleSeek(event: GestureResponderEvent) {
    const tapX = event.nativeEvent.locationX;
    if (!progressBarWidth || duration === 0) return;

    const newProgress = tapX / progressBarWidth;
    const seekTime = Math.min(Math.max(newProgress * duration, 0), duration);

    onSeek(seekTime);
  }


  const onProgressBarLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setProgressBarWidth(width);
  };


  return (
    <View>
      <Pressable
        className='w-full bg-slate-600 h-2 rounded-full justify-center'
        onPress={handleSeek}
        onLayout={onProgressBarLayout}
        hitSlop={20}
      >
        <View
          className='bg-orange-400 h-full rounded-full z-10'
          style={{ width: `${progress * 100}%` }}
        />
        <View
          className='absolute w-3 h-3 -translate-x-1/2 rounded-full bg-orange-400 z-10'
          style={{ left: `${progress * 100}%` }}
        />
        {bufferedTime && (
          <View
            className='absolute bg-gray-400 h-full rounded-full'
            style={{
              width: `${(bufferedTime / duration) * 100}%`,
            }}
          />
        )}
      </Pressable>
      <View className='flex-row justify-between mt-2'>
        <Text className='text-gray-400 text-sm'>{formatTime(currentTime)}</Text>
        <Text className='text-gray-400 text-sm'>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}
