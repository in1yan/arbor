
import { useRouter } from 'expo-router';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import plants from '@/data/plants.json';

export default function GrowGuideScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Smart Grow Guide</Text>
      <FlatList
        data={plants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-white p-4 rounded-lg shadow mb-4"
            onPress={() => router.push(`/grow-guide/${item.id}`)}>
            <Text className="text-lg font-bold">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
