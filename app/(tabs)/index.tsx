import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import Logo from '../../assets/images/logo.svg';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSequence } from 'react-native-reanimated';

export default function HomeScreen(props: Record<string, unknown>) {
  console.log('Rendering HomeScreen'); // Логирование рендера компонента

  // Значения для анимации прозрачности и вращения
  const opacity = useSharedValue(0);
  const rotation = useSharedValue(0);

  // Анимация для прозрачности и вращения
  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ rotate: `${rotation.value}deg` }],
  }));

  // Эффект для запуска анимаций поочередно при загрузке компонента
  useEffect(() => {
    // Появление логотипа
    opacity.value = withTiming(1, { duration: 4000 }, () => {
      // После появления запускаем вращение
      rotation.value = withTiming(360, { duration: 4000 });
    });
  }, []);

  return (
    <View className="flex-1 bg-[#160B20] items-center justify-center">
      {/* Анимированный логотип */}
      <Animated.View style={animatedStyle}>
        <Logo width={300} height={300} />
      </Animated.View>
      <Text className="text-3xl text-gray-800 dark:text-white font-bold mb-4">
        Добро пожаловать в Fodi
      </Text>
      <Link href="/profile" className="bg-blue-600 dark:bg-blue-400 py-3 px-6 rounded-full">
        <Text className="text-white dark:text-gray-800 font-semibold text-lg">Войти в профиль</Text>
      </Link>
    </View>
  );
}
