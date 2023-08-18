import { ScrollView, View } from 'react-native';
import CardOption from '../components/CardOption';
import { Link } from 'react-router-native';

export default function Home() {
  return (
    <ScrollView>
        <View>
          <View style={{ marginTop: 20}}>
            <Link to="/medicine">
              <CardOption source={require('../assets/medicine.png')} text='Meus Remédios' />
            </Link>
          </View>
          <View style={{ marginTop: 20}}>
            <Link to="/water">
              <CardOption source={require('../assets/water.png')} text='Hidratação' />
            </Link>
          </View>
        </View>
      </ScrollView>
  )
}