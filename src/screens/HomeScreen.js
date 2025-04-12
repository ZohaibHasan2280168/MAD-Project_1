import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Welcome to Our App</Text>
        <Text style={globalStyles.paragraph}>
          Discover amazing products and get in touch with us for any inquiries.
        </Text>

        <CustomButton
          title="View Products"
          onPress={() => navigation.navigate('Products')}
        />

        <CustomButton
          title="Contact Us"
          onPress={() => navigation.navigate('Contact')}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}