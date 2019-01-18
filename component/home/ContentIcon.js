import React, { Component } from 'react'
import { View , StyleSheet , ScrollView , } from 'react-native'
import { Text , Badge } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation'

class ContentIcon extends Component{
render(){
  return(
    <View>
    <View style={{ flex: 4, flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          paddingBottom: 0,
        }}>
        <View style={{ padding: 10, flexDirection: 'column' }}>
            <Icon 
            onPress={() => this.props.navigation.navigate('IconFlightsScreen')} 
            name="plane" style={styles.IconSize} />
          <Text style={styles.TextIcon}>Flights</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon
          onPress={() => this.props.navigation.navigate('Hotels')} 
          name="building-o" style={[styles.IconSize, { backgroundColor: '#0984e3' }]} />
          <Text style={styles.TextIcon}>Hotels</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="steam" style={[styles.IconSize, { backgroundColor: '#8e44ad' }]} />
          <Text style={styles.TextIcon}>Flight & hotel</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="money" style={[styles.IconSize, { backgroundColor: '#2ecc71' }]} />
          <Text style={styles.TextIcon}>Attraction & Activities</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="spoon" style={[styles.IconSize, { backgroundColor: '#c0392b' }]} />
          <Text style={styles.TextIcon}>Eats</Text>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
          padding: 0,
        }}>
        <View style={{ padding: 10, flexDirection: 'column' }}>
          <Icon name="train" style={[styles.IconSize, { backgroundColor: '#e67e22' }]} />
          <Text style={styles.TextIcon}>Trains</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="bus" style={[styles.IconSize, { backgroundColor: '#27ae60' }]} />
          <Text style={styles.TextIcon}>Bus & shuttle</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="taxi" style={[styles.IconSize, { backgroundColor: '#1abc9c' }]} />
          <Text style={styles.TextIcon}>Airport Transportation</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Badge style={styles.IconNew}><Text style={{ fontSize: 9 }}>New</Text></Badge>
          <Icon name="car" style={[styles.IconSize, { backgroundColor: '#34495e' }]} />
          <Text style={styles.TextIcon}>Car Rental</Text>
        </View>
        <View style={{ padding: 10 }}>
          <Icon name="th" style={[[styles.IconSize, { backgroundColor: '#bdc3c7', color: '#000' }]]} />
          <Text style={styles.TextIcon}>All Product</Text>
        </View>
      </View>
    </View>
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 4,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            padding: 0,
          }}>
          <View style={{ padding: 10 }}>
            <Icon name="trello" style={styles.SlideIcon} onPress={() => this.props.navigation.navigate('BillsTopup')} />
            <Text style={styles.SlideText}>Bill & Top-Up</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="signal" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>Top-Up & Data Packages</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="film" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>Movies</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="credit-card" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>PayLatter</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="signal" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>International Data Plans</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="check-square-o" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>Online Check-In</Text>
          </View>
          <View style={{ padding: 10 }}>
            <Icon name="bell" style={styles.SlideIcon} />
            <Text style={styles.SlideText}>Price Alerts</Text>
          </View>
        </View>
      </ScrollView>
    </View>
    </View>
  )
}
}



const styles = StyleSheet.create({
  IconSize: {
    fontSize: 26,
    color: 'white',
    backgroundColor: '#0984e3',
    borderRadius: 100, width: 40,
    height: 40,
    paddingTop: 5,
    textAlign: 'center',
  },
  IconNew: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'orange',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    left: 10,
    top: -5,
  },
  TextIcon: {
    fontSize: 8,
    right: 8,
    color: 'gray',
    width: 50,
    textAlign: 'center',
  },
  SlideText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 10,
    paddingLeft: 30,
  },
  SlideIcon: {
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 30,
  }
})
  export default withNavigation (ContentIcon)