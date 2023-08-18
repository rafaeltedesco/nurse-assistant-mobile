import { View, Image, Text, ImageProps } from 'react-native';
import headerStyles from '../mocks/headerStyles';

type CardOptionProps = {
  source: ImageProps,
  text: string,
}

export default function CardOption({ source, text }: CardOptionProps) {
  return (
    <View>
    <Image source={source} style={{ width: '100%' }} />
    <View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: headerStyles.colors.primary, paddingVertical: 15}}>
      <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'Inter_600SemiBold' }}>
        { text }
      </Text>
    </View>
  </View>
  )
}