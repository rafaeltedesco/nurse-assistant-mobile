import React from 'react';
import { View, Text } from 'react-native';

type CardOptionsProps = {
  children: JSX.Element;
  borderColor: string;
  text: string;
}

export default function BaseCardOption({ children, borderColor, text }: CardOptionsProps) {
  return (
    <View style={{ flexDirection: 'row', marginHorizontal: 20, padding: 20, borderColor, borderWidth: 2, borderRadius: 10, justifyContent: 'space-between' }}>
      { children }
      <Text style={{  fontSize: 18, fontFamily: 'Inter_300Light', color: '#444' }}>
        { text }
      </Text>
    </View>
  )
}