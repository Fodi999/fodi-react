import { LogBox } from 'react-native';
import { registerRootComponent } from 'expo';
import { Stack } from 'expo-router';

LogBox.ignoreLogs(['Unexpected text node']); // Игнорировать сообщения об ошибках "Unexpected text node"

// Основной компонент приложения
export default function App() {
  console.log('App rendering...'); // Лог для отладки рендера корневого компонента

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Добавьте здесь основной компонент навигации или начальный экран */}
    </Stack>
  );
}

// Регистрируем корневой компонент
registerRootComponent(App);
