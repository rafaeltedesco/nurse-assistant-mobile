import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import headerStyles from '../mocks/headerStyles';
import HeaderDivider from '../components/HeaderDivider';
import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const context = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <>
    <HeaderDivider messages={['Acesse sua conta']} />
    <ScrollView contentContainerStyle={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10}}>
          <View style={{width: '100%', alignItems: 'flex-start', gap: 20, borderColor: '#eee', borderWidth: 2, borderRadius: 10, padding: 40}}>
            <View style={{ width: '100%'}}>
              <Text style={{ fontSize: 18}}>Email</Text>
              <TextInput placeholder="Digite seu email aqui..." style={{ fontSize: 16, padding: 10, borderColor: '#eee', borderWidth: 1, borderRadius: 10, marginVertical: 5 }}/>
            </View>
            <View style={{ width: '100%'}}>
              <Text style={{ fontSize: 18}}>Senha</Text>
              <TextInput secureTextEntry={true}  placeholder='Digite sua senha aqui...' style={{ fontSize: 16, padding: 10, borderColor: '#eee', borderWidth: 1, borderRadius: 10, marginVertical: 5}}/>
            </View>
            <View style={{ alignSelf: 'flex-end'}}>
              <TouchableHighlight onPress={() => { context!.setUser({ username: ''}); navigate('/') }} style={{ backgroundColor: headerStyles.colors.primary, width: 90, borderRadius: 20, padding: 10, paddingHorizontal: 20}}>
                <Text style={{ color : '#fff', fontFamily: 'Inter_600SemiBold', fontSize: 16}}>Entrar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
    </>
  )
}