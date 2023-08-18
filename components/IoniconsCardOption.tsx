import { View, Image, Text, ImageProps } from 'react-native';
import headerStyles from '../mocks/headerStyles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import BaseCardOption from './BaseCardOption';
type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

type CardOptionProps = {
  iconProps: {
    name: IoniconsName;
    size: number;
    color?: string;
  }
  text: string;
}

export default function IoniconsCardOption({ iconProps, text }: CardOptionProps) {
  return (
    <View>
    <BaseCardOption borderColor="#e8f8fa" text={text}>
      <Ionicons{...iconProps} />
    </BaseCardOption>
  </View>
  )
}