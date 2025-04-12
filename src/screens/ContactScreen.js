import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput } from 'react-native';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomButton from '../components/CustomButton';
import { globalStyles } from '../styles/globalStyles';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <ScrollView contentContainerStyle={globalStyles.container}>
        <Text style={globalStyles.title}>Contact Us</Text>

        <TextInput
          style={globalStyles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={globalStyles.input}
          placeholder="Your Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={[globalStyles.input, { height: 100, textAlignVertical: 'top' }]}
          placeholder="Your Message"
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <CustomButton
          title="Submit"
          onPress={handleSubmit}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}