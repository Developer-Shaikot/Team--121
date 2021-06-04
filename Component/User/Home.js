import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import User from './User';

export default function Home() {

    const [user, setUser] = useState([]);

    useEffect(() => {
      fetch('https://mocki.io/v1/01d6ebb0-278a-461f-bfa7-31af0832d354')
      .then(res => res.json())
      .then(data => setUser(data))
    }, [])
    return (
        <View >
    
        {
          user.map(user => <User user={user}></User>)
        }
    
    </View>
    )
}
