import React from 'react'
import { View, ScrollView, Image , FlatList } from 'react-native'
import { Text , Left , Right , List , ListItem, Item } from 'native-base'

const SlidePromo = () => {
  return (
  <View>
    <View>
      <List>
        <ListItem noBorder button onPress={() => alert('Hello')}>
          <Left>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Ongoing Promos</Text>
          </Left>
          <Right>
            <Text style={{ color: '#0984e3', fontWeight: 'bold' }}>></Text>
          </Right>
        </ListItem>
      </List>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 0,
          }}>
          <Image
            style={{ height: 140, width: 100, borderRadius: 5, marginLeft: 10, }}
            source={{ uri: 'https://images.pexels.com/photos/928475/pexels-photo-928475.jpeg' }} />
              {/* <FlatList data={[
                {imageURL:require('../../img/1.jpeg')},
                {imageURL:require('../../img/2.jpeg')},
                {imageURL:require('../../img/3.jpeg')},
              ]}
              renderItem={({Item}) => 
              <Image 
              style={{ height: 140, width: 100, borderRadius: 5, marginLeft: 10, }}
              source={Item.imageURL}
              />}/> */}
          <Image
            style={{ height: 140, width: 250, borderRadius: 5, marginLeft: 10, }}
            source={require('../../img/1.jpeg')} />
          <Image
            style={{ height: 140, width: 250, borderRadius: 5, marginLeft: 10, }}
            source={require('../../img/2.jpeg')} />
          <Image
            style={{ height: 140, width: 250, borderRadius: 5, marginLeft: 10, marginRight: 10, }}
            source={require('../../img/3.jpeg')} />
        </View>
      </ScrollView>
    </View>
  <View>
    <List>
      <ListItem noBorder>
        <Left>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>The Latest on Palu</Text>
        </Left>
      </ListItem>
    </List>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          padding: 0,
        }}>
        <View style={{ marginLeft: 10, }}>
          <Image
            style={{ height: 180, width: 280, borderRadius: 5, }}
            source={{ uri: 'https://images.pexels.com/photos/433495/pexels-photo-433495.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }} />
          <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
            How You Can Help
                  </Text>
          <Text style={{ fontSize: 11, width: 280, }}>
            Redem your Travelkita points with donations for Palu & Dongala.
                  </Text>
        </View>
        <View style={{ marginRight: 10, marginLeft: 10, }}>
          <Image
            style={{ height: 180, width: 280, borderRadius: 5, }}
            source={{ uri: 'https://images.pexels.com/photos/905874/pexels-photo-905874.jpeg?auto=compress&cs=tinysrgb&h=650&w=940' }} />
          <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
            Important Notice
                  </Text>
          <Text style={{ fontSize: 11, width: 280, }}>
            Know your flight status and find out how tou can refund or reschedule.
                  </Text>
        </View>
      </View>
    </ScrollView>
  </View>
  </View>
  )
}

export default SlidePromo
