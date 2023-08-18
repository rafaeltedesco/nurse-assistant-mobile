import { View, Text, TextInput, TouchableHighlight, KeyboardAvoidingView, ScrollView } from 'react-native';
import headerStyles from '../mocks/headerStyles';
import HeaderDivider from '../components/HeaderDivider';

export default function SignUp() {
  return (
    <>
    <HeaderDivider messages={['Novo Cadastro']} style={{ paddingTop: 30}}/>
        <ScrollView contentContainerStyle={{ backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', padding: 20, borderRadius: 10}}>
          <View style={{width: '100%', alignItems: 'flex-start', gap: 20, borderColor: '#eee', borderWidth: 2, borderRadius: 10, padding: 40}}>
          <View style={{ width: '100%'}}>
              <Text style={{ fontSize: 18}}>Usuário</Text>
              <TextInput placeholder="Digite seu nome de usuário aqui..." style={{ fontSize: 16, padding: 10, borderColor: '#eee', borderWidth: 1, borderRadius: 10, marginVertical: 5 }}/>
            </View>
            <View style={{ width: '100%'}}>
              <Text style={{ fontSize: 18}}>Email</Text>
              <TextInput placeholder="Digite seu email aqui..." style={{ fontSize: 16, padding: 10, borderColor: '#eee', borderWidth: 1, borderRadius: 10, marginVertical: 5 }}/>
            </View>
            <View style={{ width: '100%'}}>
              <Text style={{ fontSize: 18}}>Senha</Text>
              <TextInput secureTextEntry={true}  placeholder='Digite sua senha aqui...' style={{ fontSize: 16, padding: 10, borderColor: '#eee', borderWidth: 1, borderRadius: 10, marginVertical: 5}}/>
            </View>
            <View style={{ alignSelf: 'flex-end'}}>
              <TouchableHighlight onPress={() => alert('ok')} style={{ backgroundColor: headerStyles.colors.primary, width: 120, borderRadius: 20, padding: 10, paddingHorizontal: 20}}>
                <Text style={{ color : '#fff', fontFamily: 'Inter_600SemiBold', fontSize: 16}}>Cadastrar</Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
        
    </>
  )
}