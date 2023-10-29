import { View, Text ,Button} from 'react-native'
import React from 'react'
import Favourites from './Favourites'
import { useNavigation } from '@react-navigation/native';

const MyList = () => {
  const navigation = useNavigation();

  const navigateTofavourites = ()=>{
    navigation.navigate('Favourites')
  }


  return (
    <TouchableOpacity onPress={navigateTofavourites} style= {Styles.buttonProfile}>
      <Text>My Favourites</Text>
    </TouchableOpacity>
  )
}

export default MyList