import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import HomeIcon from '@/assets/images/home.svg';
import MenuIcon from '@/assets/images/menu.svg';
import ProfileIcon from '@/assets/images/profil.svg';
import CartIcon from '@/assets/images/cart.svg';
import { View, Text } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const AnimatedIcon = ({ IconComponent, focused, focusedColor, defaultColor, label }: any) => {
    const translateY = useSharedValue(0);
    const borderRadius = useSharedValue(0);
    const size = useSharedValue(28);
    const borderTopWidth = useSharedValue(0);
    const scale = useSharedValue(1);
    const rotate = useSharedValue('0deg');

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [
        { translateY: translateY.value },
        { scale: scale.value },
        { rotate: rotate.value },
      ],
      borderRadius: borderRadius.value,
      width: size.value,
      height: size.value,
      borderTopWidth: borderTopWidth.value,
      borderTopColor: '#FF0000', // Цвет верхней границы
    }));

    React.useEffect(() => {
      translateY.value = withSpring(focused ? -20 : 0); // Поднимаем иконку
      size.value = withSpring(focused ? 60 : 30); // Изменяем размер иконки
      borderTopWidth.value = withSpring(focused ? 10 : 0); // Добавляем верхнюю границу
      scale.value = withTiming(focused ? 1.2 : 1, { duration: 300 }); // Добавляем эффект "жидкости"
      rotate.value = withTiming(focused ? '360deg' : '0deg', { duration: 300 }); // Вращаем иконку
    }, [focused]);

    return (
      <View className="relative items-center justify-center">
        <Animated.View style={[animatedStyle, { alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#333333' : 'transparent' }]}>
          <IconComponent width={28} height={28} fill={focused ? focusedColor : defaultColor} />
          {focused && (
            <Text className="text-xs text-gray-700 dark:text-gray-300 mt-1">{label}</Text>
          )}
        </Animated.View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        tabBarStyle: {
          backgroundColor: '#333333', // Темно-серый цвет фона
          paddingBottom: 30, // Отступ снизу для текста
          paddingTop: 20, // Отступ сверху для поднятия вкладок
          height: 80, // Высота вкладок
          borderTopWidth: 14, // Толщина верхней границы
          borderTopColor: '#FF0000', // Красный цвет верхней границы
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon
              IconComponent={HomeIcon}
              focused={focused}
              focusedColor="transparent"
              defaultColor="transparent"
              label="Главная"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon
              IconComponent={MenuIcon}
              focused={focused}
              focusedColor="transparent"
              defaultColor="transparent"
              label="Меню"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="CartScreen"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon
              IconComponent={CartIcon}
              focused={focused}
              focusedColor="transparent"
              defaultColor="transparent"
              label="Корзина"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <AnimatedIcon
              IconComponent={ProfileIcon}
              focused={focused}
              focusedColor="transparent"
              defaultColor="transparent"
              label="Профиль"
            />
          ),
        }}
      />
    </Tabs>
  );
}










