import { View, Text ,Button} from 'react-native'
import React from 'react'
import Favourites from './Favourites'

const MyList = () => {



  return (
    <View>
      <Button onPress={()=>Favourites}  ></Button>
    </View>
  )
}

export default MyList