import { useAuth } from "@clerk/clerk-expo";
import { Button, Text, View } from "react-native";

export default function Profile() {
    const { signOut } = useAuth();
  return (
    <View className="flex-1 bg-slate-800 justify-center p-4 pt-16">
      <Text className="text-2xl text-gray-100">Profile</Text>
      <Button title="Sign Out" onPress={() => signOut()} />
    </View>
  );
}