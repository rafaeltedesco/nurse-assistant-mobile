import { View, Image, Text, ImageProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import BaseCardOption from './BaseCardOption';
export type AntDesignName = React.ComponentProps<typeof AntDesign>['name'];

type CardOptionProps = {
  iconProps: {
    name: AntDesignName;
    size: number;
    color?: string;
  }
  text: string;
}

export default function AntDesignCardOption({ iconProps, text }: CardOptionProps) {
  return (
    <View>
    <BaseCardOption borderColor='#e8f8fa' text={text}>
      <AntDesign {...iconProps} />
    </BaseCardOption>
  </View>
  )
}