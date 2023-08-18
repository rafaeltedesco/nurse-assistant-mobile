import { ScrollView, View } from 'react-native';
import { Link } from 'react-router-native';
import AntDesignCardOption from '../components/AntDesignCardOption';
import IoniconsCardOption from '../components/IoniconsCardOption';
import headerStyles from '../mocks/headerStyles';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import Header from '../components/Header';

export default function Home() {
  const user = useContext(UserContext);
  return (
    <>
    <Link to={"/profile"}>
        <Header showDivider messages={[`Boas vindas, ${ user.username }`]}/>
    </Link>
    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', marginVertical:40}}>
        <View style={{ gap: 20}}>
          <View>
            <Link to="/medicine" underlayColor={'#fff'}>
              <AntDesignCardOption iconProps={{ name: 'medicinebox', size: 32, color: '#ffaeab' }} text='Meus Remédios'/>
            </Link>
          </View>
          <View>
            <Link to="/water" underlayColor={'#fff'}>
              <IoniconsCardOption iconProps={{name:'water', size: 32, color: headerStyles.colors.primary }} text='Hidratação' />
            </Link>
          </View>
        </View>
      </ScrollView>
      </>
  )
}