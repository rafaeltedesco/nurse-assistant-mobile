import { StyleSheet, View, Text, StyleProp, ViewStyle } from 'react-native';
import headerStyles from '../mocks/headerStyles';

type HeaderDividerProps = {
  messages: Array<string>;
  style?: StyleProp<ViewStyle>
}

export default function HeaderDivider({ messages, style }: HeaderDividerProps) {
  const dividerStyles: Array<StyleProp<ViewStyle>> = [styles.divider];
  if (style) {
    dividerStyles.push(style);
  }

  const renderMessages = () => {
    return messages.map((message, idx) => {
      return (
        <Text key={idx} style={styles.subtitle}>
        { message }
        </Text>
      )
    })
  }
  return (
    <View style={[...dividerStyles ]} >
      { renderMessages() }
    </View>
  )
}

const styles = StyleSheet.create({
  divider: {
    backgroundColor: headerStyles.colors.secondary,
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  subtitle: {
    fontSize: headerStyles.sizes.subtitle,
    marginHorizontal: 20,
    color: headerStyles.colors.fontColor
  }
})