
import { View, Text, FlatList, Image } from 'react-native';

import forum from '@/data/forum.json';

export default function ForumScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Community Forum</Text>
      <FlatList
        data={forum}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow mb-4">
            <View className="flex-row items-center mb-2">
              <Image source={{ uri: item.avatar }} className="w-10 h-10 rounded-full mr-2" />
              <Text className="font-bold">{item.author}</Text>
            </View>
            <Text className="mb-2">{item.post}</Text>
            <View className="flex-row">
              <Text className="mr-4">{item.likes} Likes</Text>
              <Text>{item.comments} Comments</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
