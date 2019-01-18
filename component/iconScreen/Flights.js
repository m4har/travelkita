import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Container , Content , Tabs , Tab,  } from 'native-base'

class Flights extends Component{
  render(){
    return(
      <Container>
        <Tabs tabBarUnderlineStyle={{backgroundColor:'#00a8ff'}}>
          <Tab
          tabStyle={{backgroundColor: 'white'}} 
          activeTabStyle={{backgroundColor:'white'}}
          textStyle={{color:'#00a8ff'}}
          activeTextStyle={{color:'#00a8ff'}}
          heading="Fligts"
          >
            <Text>
              FLights
            </Text>
          </Tab>
          <Tab 
          tabStyle={{backgroundColor: 'white'}} 
          activeTabStyle={{backgroundColor:'white'}}
          textStyle={{color:'#00a8ff'}}
          activeTextStyle={{color:'#00a8ff'}}
          heading="Flights & Hotels"
          >
            <Text>
              Flights and Hotel
            </Text>
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default Flights