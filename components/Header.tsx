import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import headerStyles from '../mocks/headerStyles';
import HeaderDivider from './HeaderDivider';

type HeaderProps = {
  showDivider?: boolean;
  messages: Array<string>;
}

export default function Header({ showDivider = false, messages }: HeaderProps) {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>
          Nurse Assistant
        </Text>
        <AntDesign name="user" size={42} color="white" style={styles.icon}/>
      </View>
      { showDivider && <HeaderDivider messages={messages} /> }
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: headerStyles.colors.primary,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 60
  },
  title: {
    fontSize: headerStyles.sizes.title,
    color: headerStyles.colors.fontColor,
    fontWeight: 'bold'
  },
  icon: {
    position: 'absolute',
    right: 10,
    bottom: -5
  }
});