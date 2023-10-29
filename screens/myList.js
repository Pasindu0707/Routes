import { View, Text ,Button,TouchableOpacity,StyleSheet} from 'react-native'
import React from 'react'
import Favourites from './Favourites'
import { useNavigation } from '@react-navigation/native';

const MyList = () => {
  const navigation = useNavigation();

  const navigateTofavourites = ()=>{
    navigation.navigate('Favourites')
  }


  return (
    <TouchableOpacity onPress={navigateTofavourites} style={{position:'relative',paddingTop:100}}>
      <Text>My Favourites</Text>
    </TouchableOpacity>
  )
}

export default MyList