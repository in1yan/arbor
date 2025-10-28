
import { useRouter } from 'expo-router';
import { Leaf, Repeat, ShoppingCart } from 'lucide-react-native';
import { View, Text, TouchableOpacity } from 'react-native';

import { useRoleStore } from '@/store/role';

export default function OnboardingScreen() {
  const setRole = useRoleStore((state) => state.setRole);
  const router = useRouter();

  const handleRoleSelect = (role: 'Self-Grower' | 'Exchanger' | 'Seller') => {
    setRole(role);
    router.replace('/(tabs)');
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold mb-8">Welcome to Arbor</Text>
      <Text className="text-lg mb-12">Choose your role:</Text>
      <View className="flex-row justify-around w-full">
        <TouchableOpacity
          className="items-center p-4 border border-gray-300 rounded-lg"
          onPress={() => handleRoleSelect('Self-Grower')}>
          <Leaf size={48} color="#4CAF50" />
          <Text className="mt-2 text-lg">Self-Grower</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center p-4 border border-gray-300 rounded-lg"
          onPress={() => handleRoleSelect('Exchanger')}>
          <Repeat size={48} color="#2196F3" />
          <Text className="mt-2 text-lg">Exchanger</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="items-center p-4 border border-gray-300 rounded-lg"
          onPress={() => handleRoleSelect('Seller')}>
          <ShoppingCart size={48} color="#FF9800" />
          <Text className="mt-2 text-lg">Seller</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
