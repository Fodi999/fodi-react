import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';

export default function SignUpScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Логика регистрации пользователя
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Пароль:', password);
  };

  return (
    <View className="flex-1 items-center justify-center p-4 bg-blue-900">
      <Text className="text-3xl font-bold text-center text-blue-100 mb-8">Регистрация</Text>

      <TextInput
        placeholder="Имя"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={setName}
        className="bg-blue-100 text-blue-900 p-4 rounded mb-4 w-3/4"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#9CA3AF"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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
      <Link href="/ProfileScreen" className="mt-4 w-3/4 bg-blue-500 py-3 rounded text-center">
        <Text className="text-white font-semibold">Зарегистрироваться</Text>
      </Link>
      </View>

      {/* Добавляем ссылку для перехода на страницу входа */}
      <Link href="/signIn" className="mt-4">
        <Text className="text-blue-300 underline mt-4">Уже есть аккаунт? Войти</Text>
      </Link>
    </View>
  );
}






