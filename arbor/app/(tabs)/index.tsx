
import { Leaf, Droplet, Sun } from 'lucide-react-native';
import { View, Text } from 'react-native';

import { useRoleStore } from '@/store/role';

export default function DashboardScreen() {
  const role = useRoleStore((state) => state.role);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Welcome, {role}!</Text>
      <View className="grid grid-cols-1 gap-4">
        <View className="bg-white p-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <Leaf size={24} color="#4CAF50" />
            <Text className="ml-2 text-lg font-bold">Your Active Crops</Text>
          </View>
          <Text className="mt-2">You have 3 active crops.</Text>
        </View>
        <View className="bg-white p-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <Droplet size={24} color="#2196F3" />
            <Text className="ml-2 text-lg font-bold">Today's Tip</Text>
          </View>
          <Text className="mt-2">Don't overwater during cloudy days!</Text>
        </View>
        <View className="bg-white p-4 rounded-lg shadow">
          <View className="flex-row items-center">
            <Sun size={24} color="#FF9800" />
            <Text className="ml-2 text-lg font-bold">Eco-score</Text>
          </View>
          <Text className="mt-2">82 🌎</Text>
        </View>
      </View>
    </View>
  );
}
