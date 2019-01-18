import React from 'react'
import { View , Text , Image , StyleSheet } from 'react-native'
import {Icon , Container , Content , Body  } from 'native-base'

const BillsTopup = () => {
  return(
    <View style={{backgroundColor:'gray', flex:1}}>
      <View>
        <View style={styles.viewContainer}>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
        </View>

        <View style={styles.viewContainer}>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
          <View style={styles.viewBox}>
            <Icon style={styles.icon} name='html5' type='FontAwesome' />
            <Text>My Bills</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  viewContainer:{
    flexDirection:'row',
  },
  viewBox:{
    backgroundColor: '#fff', 
    padding: 30, 
    borderRadius: 10, 
    top: 20,
    right: 10, 
    justifyContent: 'center',
    alignContent: 'center'
  },
  icon:{
    justifyContent:'center'
  }
})

export default BillsTopup

