
import { useRoleStore } from '@/store/role';
import { View, Text, Switch } from 'react-native';

export default function ProfileScreen() {
  const role = useRoleStore((state) => state.role);

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Profile</Text>
      <View className="bg-white p-4 rounded-lg shadow mb-4">
        <Text className="text-lg font-bold">John Doe</Text>
        <Text>Role: {role}</Text>
        <Text>Eco-score: 82 🌎</Text>
      </View>
      <View className="bg-white p-4 rounded-lg shadow">
        <Text className="text-lg font-bold mb-2">Settings</Text>
        <View className="flex-row items-center justify-between">
          <Text>Dark Mode</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
}
