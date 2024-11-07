import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import HomeIcon from '@/assets/images/home.svg';
import MenuIcon from '@/assets/images/menu.svg';
import ProfileIcon from '@/assets/images/profil.svg';
import CartIcon from '@/assets/images/cart.svg';
import { View, Text } from 'react-native';
import { SvgProps } from 'react-native-svg'; // Импортируем SvgProps

type AnimatedIconProps = {
  IconComponent: React.FC<SvgProps>; // Используем SvgProps для совместимости с SVG-компонентами
  focused: boolean;
  focusedColor: string;
  defaultColor: string;
  label: string;
};

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ IconComponent, focused, focusedColor, defaultColor, label }) => {
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
    borderTopColor: '#FF0000',
  }));

  React.useEffect(() => {
    translateY.value = withSpring(focused ? -10 : 0);
    size.value = withSpring(focused ? 60 : 30);
    borderTopWidth.value = withSpring(focused ? 10 : 0);
    scale.value = withTiming(focused ? 1.2 : 1, { duration: 300 });
    rotate.value = withTiming(focused ? '360deg' : '0deg', { duration: 300 });
  }, [focused]);

  return (
    <View className="relative items-center justify-center">
      <Animated.View
        style={[animatedStyle, { alignItems: 'center', justifyContent: 'center', backgroundColor: focused ? '#333333' : 'transparent' }]}
      >
        <IconComponent width={28} height={28} fill={focused ? focusedColor : defaultColor} />
        {focused && (
          <Text className="text-xs text-gray-700 dark:text-gray-300 mt-1">{label}</Text>
        )}
      </Animated.View>
    </View>
  );
};

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colorScheme === 'dark' ? '#FFFFFF' : '#000000',
        tabBarStyle: {
          backgroundColor: '#333333',
          paddingBottom: 30,
          paddingTop: 20,
          height: 80,
          borderTopWidth: 10,
          borderTopColor: '#FF0000',
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
};

export default TabLayout;


