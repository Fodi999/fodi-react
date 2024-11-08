import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { CartProvider } from './context/CartContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // состояние авторизации пользователя
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  console.log('Rendering RootLayout');
  console.log('isAuthenticated:', isAuthenticated);

  return (
    <CartProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          {!isAuthenticated ? (
            <>
              {/* Экраны авторизации */}
              <Stack.Screen name="(auth)/signIn" options={{ title: 'Вход' }} />
              <Stack.Screen name="(auth)/signUp" options={{ title: 'Регистрация' }} />
            </>
          ) : (
            <>
              {/* Главный Tab Layout для авторизованных пользователей */}
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </>
          )}
        </Stack>
      </ThemeProvider>
    </CartProvider>
  );
}
