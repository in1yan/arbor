
import { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function DiseaseDetectionScreen() {
  const [result, setResult] = useState(false);

  const handleUpload = () => {
    setResult(true);
  };

  return (
    <View className="flex-1 bg-gray-100 p-4">
      <Text className="text-2xl font-bold mb-4">Disease Detection</Text>
      {!result ? (
        <TouchableOpacity
          className="bg-green-500 p-4 rounded-lg shadow"
          onPress={handleUpload}>
          <Text className="text-white text-center text-lg">Upload Photo</Text>
        </TouchableOpacity>
      ) : (
        <View className="bg-white p-4 rounded-lg shadow">
          <Text className="text-lg font-bold">🌿 Detected: Leaf Blight</Text>
          <Text>Confidence: 94%</Text>
          <Text>Cure Tip: Use neem oil and avoid overwatering.</Text>
        </View>
      )}
    </View>
  );
}
