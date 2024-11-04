import { TouchableOpacity, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen(props: Record<string, unknown>) {
  return (
    <View className="flex-1 bg-white dark:bg-gray-900 items-center justify-center">
      <Text className="text-3xl text-gray-800 dark:text-white font-bold mb-4">
        Добро пожаловать в Fodi
      </Text>
      <Link href="/profile" className="bg-blue-600 dark:bg-blue-400 py-3 px-6 rounded-full">
        <Text className="text-white dark:text-gray-800 font-semibold text-lg">Войти в профиль</Text>
      </Link>
    </View>
  );
}













