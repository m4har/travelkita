import React from 'react'
import { View , ScrollView , Image } from 'react-native'
import { Text, Left, Right , List , ListItem , } from 'native-base'


const SlideBioskop = () => {
 const bioskop = [
    {
      id:1,
      title:'VENOM',
      genre: 'ACTION',
      imageURL: require('../../img/film/venom.jpg'),
    },
    {
      id: 2,
      title: 'ARUNA',
      genre:'DRAMA',
      imageURL: require('../../img/film/Aruna.jpg'),
    },
    {
      id: 3,
      title: 'CRAZY RICH MAN',
      genre: 'COMEDY',
      imageURL: require('../../img/film/Crazy.jpg'),
    },
    {
      id: 4,
      title: 'MUNAFIK',
      genre:'HORROR',
      imageURL: require('../../img/film/Munafik.jpg'),
    },
    {
      id: 5,
      title: 'FILM KOREA',
      genre:'DRAMA',
      imageURL: require('../../img/film/parkBouYoung.jpg'),
    },
    {
      id: 6,
      title: 'SANTET',
      genre: 'HORROR',
      imageURL: require('../../img/film/santet.jpg'),
    }]
  return (
    <View>
      <View>
        <Text style={{ padding: 30, fontSize: 25 }}>
          Travelkita's Recomendation
            </Text>
        <List>
          <ListItem noBorder>
            <Left>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Now Playing in Arkademy City</Text>
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
            {bioskop.map((post, index)=> {
              return(
                <View value={index} style={{marginLeft:10}}>
                  <Image 
                  style={{height:280, width:180, borderRadius:5}}
                    source={post.imageURL}
                  />
                  <Text style={{fontSize:13, fontWeight:'bold'}}>
                    {post.title}
                  </Text>
                  <Text style={{fontSize:10}}>
                    {post.genre}
                  </Text>
                </View>
              )
            }
              )}
            {/* <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/venom.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                VENOM
                  </Text>
              <Text style={{ fontSize: 11, }}>
                ACTION
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/Aruna.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                ARUNA
                  </Text>
              <Text style={{ fontSize: 11, }}>
                DRAMA
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/Crazy.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                CRAZY RICH MAN
                  </Text>
              <Text style={{ fontSize: 11, }}>
                COMEDY
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/English.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                JONNY ENGLISH REBORN
                  </Text>
              <Text style={{ fontSize: 11, }}>
                COMEDY
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/Munafik.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                MUNAFIK
                  </Text>
              <Text style={{ fontSize: 11, }}>
                HORROR
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/parkBouYoung.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                FILM KOREA
                  </Text>
              <Text style={{ fontSize: 11, }}>
                DRAMA
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/santet.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                SANTET
                  </Text>
              <Text style={{ fontSize: 11, }}>
                HORROR
                  </Text>
            </View>
            <View style={{ marginLeft: 10, }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/smallFoot.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                SMALL FOOT
                  </Text>
              <Text style={{ fontSize: 11, }}>
                ANIMATION
                  </Text>
            </View>
            <View style={{ marginLeft: 10, marginRight: 10 }}>
              <Image
                style={{ height: 280, width: 180, borderRadius: 5, }}
                source={require('../../img/film/Something.jpg')} />
              <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                SOMETHING
                  </Text>
              <Text style={{ fontSize: 11, }}>
                DRAMA
                  </Text>
            </View> */}
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

export default SlideBioskop