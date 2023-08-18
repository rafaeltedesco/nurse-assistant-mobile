import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import { NativeRouter, Route, Routes, Link } from 'react-router-native';

import { useFonts, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light, Inter_200ExtraLight } from '@expo-google-fonts/inter';
import Home from './pages/Home';
import { UserContext } from './contexts/UserContext';
import Medicine from './pages/Medicine';
import Water from './pages/Water';
import PrivateRoute from './auth/PrivateRoute';
import Login from './pages/Login';

export default function App() {
  const [user, setUser] = React.useState({ username: ''});
  const [fontsLoaded] = useFonts({
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold
  })

  if (!fontsLoaded) {
    return null
  }

  const hasToRenderHeader = () => {
    return user.username.length > 0;
  }

  return (
    <UserContext.Provider value={user}>
      <View style={styles.container}>
        <StatusBar />
        <NativeRouter>
          { hasToRenderHeader() && <Link to="/">
              <Header showDivider message={`Boas vindas, ${ user.username }`}/>
            </Link>
          }
          <Routes>
            <Route path="/" Component={PrivateRoute}>
              <Route path="/" Component={Home} />
            </Route>
            <Route path="/medicine" Component={PrivateRoute}>
              <Route path="/medicine" Component={Medicine} />
            </Route>
            <Route path="/water" Component={PrivateRoute}>
              <Route path="/water" Component={Water} />
            </Route>
            <Route path="/login" Component={Login} />
        </Routes>
      </NativeRouter>
      </View>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
