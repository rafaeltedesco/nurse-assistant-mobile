import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route, Routes } from 'react-router-native';
import { View, StyleSheet } from 'react-native';
import { useFonts, Inter_600SemiBold, Inter_500Medium, Inter_400Regular, Inter_300Light, Inter_200ExtraLight } from '@expo-google-fonts/inter';
import Home from './pages/Home';
import { User, UserContext } from './contexts/UserContext';
import Medicine from './pages/Medicine';
import Water from './pages/Water';
import PrivateRoute from './auth/PrivateRoute';
import AuthLogin from './pages/AuthLogin';
import UserProfile from './pages/UserProfile';

export default function App() {
  const [user, setUser] = React.useState<User>({ username: ''});
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

  return (
    <UserContext.Provider value={{ user, setUser }}>
        <View style={styles.container}>
          <StatusBar />
          <NativeRouter>
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
              <Route path="/profile" Component={PrivateRoute}>
                <Route path="/profile" Component={UserProfile} />
              </Route>
              <Route path="/login" Component={AuthLogin} />
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
