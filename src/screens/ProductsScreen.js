import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { globalStyles } from '../styles/globalStyles';

const products = [
  {
    id: '1',
    title: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 99.99,
    image: require('../assets/headphones.jpg'),
  },
  {
    id: '2',
    title: 'Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring.',
    price: 199.99,
    image: require('../assets/smartwatch.jpg'),
  },
  {
    id: '3',
    title: 'Bluetooth Speaker',
    description: 'Portable speaker with 20 hours battery life.',
    price: 59.99,
    image: require('../assets/speaker.jpg'),
  },
  {
    id: '4',
    title: 'Laptop Backpack',
    description: 'Durable backpack with USB charging port.',
    price: 49.99,
    image: require('../assets/backpack.jpg'),
  },
];

export default function ProductsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={globalStyles.title}>Our Products</Text>
        <FlatList
          data={products}
          renderItem={({ item }) => <ProductCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20, // Add padding at bottom for footer
  },
});