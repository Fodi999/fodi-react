// CartScreen.tsx
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useCart } from '../context/CartContext';

export default function CartScreen() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, total } = useCart();

  // Обработчик нажатия кнопки "Заказать"
  const handleOrder = () => {
    if (cart.length === 0) {
      Alert.alert("Корзина пуста", "Пожалуйста, добавьте товары в корзину перед заказом.");
      return;
    }
    Alert.alert("Заказ оформлен", `Сумма заказа: ${total.toFixed(2)}₽`);
    clearCart();
  };

  return (
    <View className="flex-1 p-5 bg-white dark:bg-gray-900">
      <Text className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Корзина</Text>
      {cart.length === 0 ? (
        <Text className="text-gray-600 dark:text-gray-300">Ваша корзина пуста</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center justify-between mb-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                {/* Левая часть: Фото и текст */}
                <View className="flex-row items-center">
                  <View className="w-20 h-20 mr-4 overflow-hidden rounded-lg">
                    <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                  </View>
                  <View>
                    <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</Text>
                    <Text className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">{item.price}</Text>
                  </View>
                </View>

                {/* Правая часть: Кнопка удаления и счетчик */}
                <View className="flex flex-col items-center">
                  {/* Кнопка удаления */}
                  <TouchableOpacity
                    className="bg-red-500 py-2 px-4 rounded-lg"
                    onPress={() => removeFromCart(item.id)}
                  >
                    <Text className="text-white font-semibold">Удалить</Text>
                  </TouchableOpacity>

                  {/* Счетчик количества */}
                  <View className="flex-row items-center mt-2">
                    <TouchableOpacity
                      className="bg-gray-300 dark:bg-gray-700 p-2 rounded-lg"
                      onPress={() => decreaseQuantity(item.id)}
                    >
                      <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">-</Text>
                    </TouchableOpacity>
                    <Text className="mx-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{item.quantity}</Text>
                    <TouchableOpacity
                      className="bg-gray-300 dark:bg-gray-700 p-2 rounded-lg"
                      onPress={() => increaseQuantity(item.id)}
                    >
                      <Text className="text-lg font-bold text-gray-900 dark:text-gray-100">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
            showsVerticalScrollIndicator={false}
          />

          {/* Отображение общей суммы */}
          <View className="mt-4 p-4 bg-gray-200 dark:bg-gray-800 rounded-lg">
            <Text className="text-xl font-bold text-gray-900 dark:text-gray-100">
              Общая сумма: {total.toFixed(2)}₽
            </Text>
          </View>

          {/* Кнопка "Заказать" */}
          <TouchableOpacity
            className="mt-5 bg-green-500 py-3 rounded-lg items-center"
            onPress={handleOrder}
          >
            <Text className="text-white font-semibold">Заказать</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-5 bg-red-500 py-3 rounded-lg items-center"
            onPress={clearCart}
          >
            <Text className="text-white font-semibold">Очистить корзину</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
