
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function AddCropModal() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [stage, setStage] = useState('');
  const [nextAction, setNextAction] = useState('');

  const handleAddCrop = () => {
    // TODO: Add the new crop to the list
    router.back();
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Add New Crop</Text>
      <TextInput
        className="bg-white p-4 rounded-lg shadow mb-4"
        placeholder="Crop Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        className="bg-white p-4 rounded-lg shadow mb-4"
        placeholder="Growth Stage"
        value={stage}
        onChangeText={setStage}
      />
      <TextInput
        className="bg-white p-4 rounded-lg shadow mb-4"
        placeholder="Next Action"
        value={nextAction}
        onChangeText={setNextAction}
      />
      <TouchableOpacity
        className="bg-green-500 p-4 rounded-lg shadow"
        onPress={handleAddCrop}>
        <Text className="text-white text-center text-lg">Add Crop</Text>
      </TouchableOpacity>
    </View>
  );
}
