import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { useCart } from '../context/CartContext';


export default function CartScreen() {
  const { cartItems } = useCart();

  return (
    <View className="flex-1 p-5 bg-white dark:bg-gray-900">
      <Text className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Корзина</Text>
      {cartItems.length === 0 ? (
        <Text className="text-gray-600 dark:text-gray-300">Ваша корзина пуста</Text>
      ) : (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View className="p-4 mb-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg w-full">
              <Image source={item.image} className="h-32 w-full rounded-lg object-cover mb-2" />
              <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">{item.description}</Text>
              <Text className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">{item.price}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
