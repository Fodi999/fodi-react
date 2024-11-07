// MenuScreen.tsx
import React, { useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import Rectangle3 from '@/assets/images/Rectangle-3.webp';
import Rectangle22 from '@/assets/images/Rectangle-22.webp';
import { useCart } from '../context/CartContext';

const menuSections = [
  {
    sectionTitle: 'Суши',
    items: [
      { id: '1', title: 'Сет Суши', description: 'Набор из различных видов суши', price: '1200₽', image: Rectangle3 },
      { id: '2', title: 'Классические Роллы', description: 'Классические роллы с разными начинками', price: '800₽', image: Rectangle22 },
      { id: '3', title: 'Премиум Суши', description: 'Суши с отборными ингредиентами', price: '1500₽', image: Rectangle3 },
    ],
  },
  {
    sectionTitle: 'Сеты',
    items: [
      { id: '4', title: 'Большой Сет', description: 'Разнообразные суши и роллы', price: '2000₽', image: Rectangle22 },
      { id: '5', title: 'Малый Сет', description: 'Небольшой набор суши', price: '1000₽', image: Rectangle3 },
      { id: '6', title: 'Фирменный Сет', description: 'Набор от шеф-повара', price: '1800₽', image: Rectangle22 },
    ],
  },
  {
    sectionTitle: 'Роллы',
    items: [
      { id: '7', title: 'Филадельфия', description: 'Классический ролл с лососем', price: '900₽', image: Rectangle3 },
      { id: '8', title: 'Калифорния', description: 'Популярный ролл с крабом', price: '850₽', image: Rectangle22 },
      { id: '9', title: 'Дракон', description: 'Острый ролл с угрем', price: '1200₽', image: Rectangle3 },
    ],
  },
  {
    sectionTitle: 'Напитки',
    items: [
      { id: '10', title: 'Зелёный чай', description: 'Ароматный зелёный чай', price: '200₽', image: Rectangle22 },
      { id: '11', title: 'Саке', description: 'Традиционный японский напиток', price: '500₽', image: Rectangle3 },
      { id: '12', title: 'Пиво', description: 'Лёгкое японское пиво', price: '300₽', image: Rectangle22 },
    ],
  },
];

export default function MenuScreen() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const { addToCart } = useCart();

  return (
    <View className="flex-1 p-5 bg-white dark:bg-gray-900">
      <Text className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Меню</Text>
      <FlatList
        data={menuSections}
        keyExtractor={(section) => section.sectionTitle}
        renderItem={({ item: section }) => (
          <View className="mb-8">
            <Text className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">{section.sectionTitle}</Text>
            <FlatList
              data={section.items}
              horizontal
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className={`mr-4 p-4 rounded-lg shadow-lg w-64 ${
                    selectedItemId === item.id ? 'border-2 border-red-500' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                  onPress={() => setSelectedItemId(item.id === selectedItemId ? null : item.id)}
                >
                  <View className="w-full h-40 mb-2 overflow-hidden rounded-lg">
                    <Image source={item.image} style={{ width: '100%', height: '100%' }} resizeMode="contain" />
                  </View>
                  <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</Text>
                  <Text className="text-sm text-gray-600 dark:text-gray-300">{item.description}</Text>
                  <Text className="text-lg font-bold text-blue-600 dark:text-blue-400 mt-2">{item.price}</Text>
                  <TouchableOpacity
                    className="mt-3 bg-blue-500 dark:bg-blue-400 py-2 rounded-lg items-center"
                    onPress={() => addToCart({ id: item.id, title: item.title, price: item.price, image: item.image })}
                  >
                    <Text className="text-white font-semibold">Купить</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
