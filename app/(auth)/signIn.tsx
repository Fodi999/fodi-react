import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignInScreen() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Импортируем useRouter для навигации

  const handleSignIn = () => {
    // Логика для входа
    console.log('Имя:', name);
    console.log('Пароль:', password);
    
    // Переход на экран ProfileScreen
    router.push('/(tabs)/ProfileScreen');
  };

  return (
    <View className="flex-1 items-center justify-center p-4 bg-blue-900">
      <Text className="text-3xl font-bold text-center text-blue-100 mb-8">Вход</Text>

      <TextInput
        placeholder="Имя"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={setName}
        className="bg-blue-100 text-blue-900 p-4 rounded mb-4 w-3/4"
      />

      <TextInput
        placeholder="Пароль"
        placeholderTextColor="#9CA3AF"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        className="bg-blue-100 text-blue-900 p-4 rounded mb-4 w-3/4"
      />

      <View className="mt-4 w-3/4">
        <Button title="Войти" color="#4A90E2" onPress={handleSignIn} />
      </View>
    </View>
  );
}

