import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Header() {
  return (
    <View style={globalStyles.header}>
      <Text style={globalStyles.headerTitle}>My Mobile App</Text>
    </View>
  );
}