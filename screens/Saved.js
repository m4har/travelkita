import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Saved extends Component {
  render() {
      bioskop = [
    {
      id:1,
      title:'VENOM',
      genre: 'ACTION',
      imageURL: require('../img/film/venom.jpg'),
    },
    {
      id: 2,
      title: 'ARUNA',
      genre:'DRAMA',
      imageURL: require('../img/film/Aruna.jpg'),
    },
    {
      id: 3,
      title: 'CRAZY RICH MAN',
      genre: 'COMEDY',
      imageURL: require('../img/film/Crazy.jpg'),
    },
    {
      id: 4,
      title: 'MUNAFIK',
      genre:'HORROR',
      imageURL: require('../img/film/Munafik.jpg'),
    },
    {
      id: 5,
      title: 'FILM KOREA',
      genre:'DRAMA',
      imageURL: require('../img/film/parkBouYoung.jpg'),
    },
    {
      id: 6,
      title: 'SANTET',
      genre: 'HORROR',
      imageURL: require('../img/film/santet.jpg'),
    }]
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Saved!</Text>
      </View>
      
    )
    {bioskop.map((post, index)=> {
      <View value={index}>
        <Text>
          {post}
        </Text>
      </View>
    })}
  }
}