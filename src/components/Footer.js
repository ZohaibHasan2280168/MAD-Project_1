import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Footer() {
  return (
    <View style={globalStyles.footer}>
      <Text style={globalStyles.footerText}>© 2023 My Mobile App</Text>
    </View>
  );
}