import { StyleSheet, View, Text } from 'react-native';
import headerStyles from '../mocks/headerStyles';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

export default function HeaderDivider() {
  const user = useContext(UserContext);
  return (
    <View style={styles.divider}>
      <Text style={styles.subtitle}>
        Boas vindas, { user.username }
      </Text>
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