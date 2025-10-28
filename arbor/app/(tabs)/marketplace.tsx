
import { View, Text, FlatList, Image } from 'react-native';

import marketplace from '@/data/marketplace.json';

export default function MarketplaceScreen() {
  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Marketplace</Text>
      <FlatList
        data={marketplace}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="bg-white p-4 rounded-lg shadow mb-4">
            <Image source={{ uri: item.image }} className="w-full h-48 rounded-lg mb-4" />
            <Text className="text-lg font-bold">{item.name}</Text>
            <Text>Seller: {item.seller}</Text>
            <Text>Distance: {item.distance}</Text>
          </View>
        )}
      />
    </View>
  );
}
