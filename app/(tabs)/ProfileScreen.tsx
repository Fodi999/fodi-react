import { View, Text, Button } from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center p-4 bg-blue-900">
      <Text className="text-3xl font-bold text-blue-100 mb-8">Личный кабинет</Text>

      <View className="w-full items-start px-4">
        <Text className="text-lg text-blue-100 mb-2">Имя пользователя: Иван Иванов</Text>
        <Text className="text-lg text-blue-100 mb-4">Email: ivan@example.com</Text>
      </View>

      <View className="mt-8 w-3/4">
        <Button title="Выйти" color="#FF6347" onPress={() => { /* Логика для выхода */ }} />
      </View>
    </View>
  );
}
