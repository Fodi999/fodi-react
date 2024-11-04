import { Link, Stack } from 'expo-router';
import { Text, View } from 'react-native';


// Оборачиваем Text и View с помощью styled для поддержки className
const StyledText = (Text);
const StyledView = (View);

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <StyledView className="flex-1 items-center justify-center p-5">
        <StyledText className="text-2xl font-bold mb-4">This screen doesn't exist.</StyledText>
        <Link href="/" className="mt-4 py-3">
          <StyledText className="text-blue-500 underline">Go to home screen!</StyledText>
        </Link>
      </StyledView>
    </>
  );
}

