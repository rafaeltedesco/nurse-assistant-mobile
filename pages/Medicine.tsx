import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';

export default function Medicine() {
  const context = useContext(UserContext);
  return (
    <>
     <Link to={"/"}>
        <Header showDivider messages={[`Boas vindas, ${ context!.user.username }`]}/>
    </Link>
    <View>
      <Text>
        Medicine
      </Text>
    </View>
    </>
  )
}