
import { useRouter } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';

import crops from '@/data/crops.json';

export default function CropTrackerScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Crop Tracker</Text>
      <FlatList
        data={crops}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow mb-4">
            <Image source={{ uri: item.image }} className="w-full h-48 rounded-lg mb-4" />
            <Text className="text-lg font-bold">{item.name}</Text>
            <Text>Stage: {item.stage}</Text>
            <Text>Next Action: {item.nextAction}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        className="absolute bottom-4 right-4 bg-green-500 p-4 rounded-full shadow"
        onPress={() => router.push('/crop-tracker/add')}>
        <Text className="text-white text-2xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}
