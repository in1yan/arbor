
import { View, Text, FlatList } from 'react-native';

import rewards from '@/data/rewards.json';

export default function RewardsScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Rewards</Text>
      <FlatList
        data={rewards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow mb-4">
            <Text className="text-lg font-bold">{item.name}</Text>
            <View className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
              <View
                className="bg-green-500 h-2.5 rounded-full"
                style={{ width: `${item.progress}%` }}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
