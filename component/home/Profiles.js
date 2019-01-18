import React, { Component } from 'react'
import { StyleSheet , View } from 'react-native'
import { Text , Content , Thumbnail , List , ListItem  } from 'native-base'
import { withNavigation } from 'react-navigation'

import Account from '../../screens/Account'

const Profiles = (props) => {
  return (
    <View>
      <Content
        style={{
          borderBottomColor: '#dcdde1',
          borderBottomWidth: 1,
          height: 90,
          paddingLeft: 10,
          paddingVertical: 10,
        }}>
        <List>
          <ListItem button onPress={() => props.navigation.navigate('MyAccount')}>
            <Thumbnail
              source={{ uri: 'https://www.shareicon.net/download/128x128//2016/05/24/770137_man_512x512.png' }}
              style={{ width: 50, height: 50, bottom: 10, }} />
            <Text
              style={{
                position: 'absolute',
                top: 10,
                paddingLeft: 60,
                fontWeight: 'bold',
              }}>Mahard Dicka Nurachman</Text>
            <Text style={[styles.Top, {left:68}]}>100 Point</Text>
            <Text style={[styles.Top, {left:160}]}>travelkitaPay</Text>
          </ListItem>
        </List>
      </Content>
      </View>
  )
}

// const Profile = () => <Account/>

// export default Profiles

const styles = StyleSheet.create({
  Top: {
    fontSize: 13,
    fontWeight: 'bold',
    position: 'absolute',
    top: 35,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#dcdde1',
  },
})

// const App = StackNavigator({
//   Home:Profiles ,
//   Profile:Profile ,
// },
//   {
//     initialRouteName: "Home"
//   });

export default withNavigation(Profiles)