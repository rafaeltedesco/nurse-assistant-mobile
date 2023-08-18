import { ScrollView, View } from 'react-native';
import CardOption from '../components/AntDesignCardOption';
import { Link } from 'react-router-native';
import AntDesignCardOption from '../components/AntDesignCardOption';
import IoniconsCardOption from '../components/IoniconsCardOption';
import headerStyles from '../mocks/headerStyles';

export default function Home() {
  return (
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
  )
}