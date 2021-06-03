import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import User from './Component/User/User';

export default function App() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://mocki.io/v1/cbbe7459-b233-468e-ab6a-69e847e41aec?fbclid=IwAR0imui72363bIVME8bmlTM4VCHE3So0lvwt-sTGcy6jl9aWlKyl2qmZK9c')
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  return (
    <View style={styles.container}>
     
        {
          user.map(user => <User user={user}></User>)
        }
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
