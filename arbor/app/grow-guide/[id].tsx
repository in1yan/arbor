
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

import plants from '@/data/plants.json';

export default function GrowGuideDetailScreen() {
  const { id } = useLocalSearchParams();
  const plant = plants.find((p) => p.id.toString() === id);

  if (!plant) {
    return <Text>Plant not found</Text>;
  }

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">{plant.name}</Text>
      <View className="bg-white p-4 rounded-lg shadow">
        <Text className="text-lg font-bold mb-2">Soil Type:</Text>
        <Text className="mb-4">{plant.soil}</Text>
        <Text className="text-lg font-bold mb-2">Watering Frequency:</Text>
        <Text className="mb-4">{plant.watering}</Text>
        <Text className="text-lg font-bold mb-2">Sunlight Level:</Text>
        <Text className="mb-4">{plant.sunlight}</Text>
        <Text className="text-lg font-bold mb-2">Season:</Text>
        <Text>{plant.season}</Text>
      </View>
    </View>
  );
}
