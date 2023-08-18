import { useContext } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'react-router-native';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';

export default function UserProfile() {
  const user = useContext(UserContext);
  return (
    <>
     <Link to={"/"}>
        <Header showDivider messages={[`Boas vindas, ${ user.username }`]}/>
    </Link>
    <View>
      <Text>
        Profile
      </Text>
    </View>
    </>
  )
}