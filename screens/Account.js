import React, {Component} from 'react'
import {  StyleSheet } from "react-native"
import { List, ListItem, Thumbnail , Text , 
        Container, Header, Content, Left , 
        Right , Title , Body , Icon  } from 'native-base'

export default class Account extends Component{
  render(){
    return(
      <Container>
        <Header androidStatusBarColor="#00a8ff" style={{ backgroundColor: "#00a8ff" }}>
          <Body>
            <Title style={{paddingLeft:10}}>My Account</Title>
          </Body>
          <Right>
            <Icon name="md-more" style={{ color: "white", right: 20, }} />
          </Right>
        </Header>
        <Content>
          <Container style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#00a8ff", height: 230 }}>
            <Thumbnail style={{ height: 100, width: 100 }} source={{ uri: "https://www.shareicon.net/download/128x128//2016/05/24/770137_man_512x512.png" }} />
            <Text style={{ position: "absolute", top: 20, right: 20, color: "white" }}>
              EDIT
            </Text>
            <Text style={{ fontSize: 23, fontWeight: "bold", color: "white" }}>
              Mahar Dicka Nurachman
            </Text>
            <Text style={{ color: "white" }}>mahardicka404@gmail.com</Text>
          </Container>
          <Container style={{ backgroundColor: "#dcdde1", height: 1100, }}>

            <List style={styles.ListView}>
              <ListItem button onPress={() => alert('Hello')}>
                <Icon name="ios-trophy-outline" />
                <Left>
                  <Text> 100 Point</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
            </List>

            <List style={styles.ListView}>
              <ListItem button>
                <Icon name="ios-chatboxes-outline" />
                <Left>
                  <Body>
                    <Text>My Review</Text>
                    <Text note style={styles.ListNote}>A collection of your Travelkita reviews</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
            </List>

            <List style={styles.ListView}>
              <ListItem button>
                <Left>
                  <Text>TravelkitaPay</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
              <ListItem noBorder button>
                <Icon name="ios-cash-outline" />
                <Left>
                  <Text style={styles.ListData}> PayLatter</Text>
                </Left>
                <Right>
                  <Text style={styles.ListData}> Appy Today!</Text>
                </Right>
              </ListItem>
              <ListItem button noBorder>
                <Icon name="ios-card" />
                <Left>
                  <Text style={styles.ListData}> My Cards</Text>
                </Left>
                <Right>
                  <Text style={styles.ListData}> No Cards Yet</Text>
                </Right>
              </ListItem>
              <ListItem button noBorder>
                <Icon name="ios-exit-outline" />
                <Left>
                  <Text style={styles.ListData}> Direct Debit</Text>
                </Left>
                <Right>
                  <Text style={styles.ListData}>No cards Yet</Text>
                </Right>
              </ListItem>
            </List>

            <List style={styles.ListView}>
              <ListItem button>
                <Icon name="ios-cash-outline" />
                <Left>
                  <Body>
                    <Text>My Refund</Text>
                    <Text note style={styles.ListNote}>Manage your refund in one place</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
              <ListItem button>
                <Icon name="ios-people-outline" />
                <Left>
                  <Body>
                    <Text>Passenger Quick Pick</Text>
                    <Text note style={styles.ListNote}>Fill in passenger details now, pick passengers quickly later.</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan}/>
                </Right>
              </ListItem>
              <ListItem button>
                <Left>
                  <Icon name="ios-paper-outline" />
                  <Body>
                    <Text>My Bills</Text>
                    <Text note style={styles.ListNote}>Add and manage your bills here</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
              <ListItem button>
                <Icon name="ios-notifications-outline" />
                <Left>
                  <Body>
                    <Text>Price Alerts</Text>
                    <Text note style={styles.ListNote}>Be the frist to know when airface changes</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan}/>
                </Right>
              </ListItem>
            </List>

            <List style={styles.ListView}>
              <ListItem button>
                <Icon name="ios-help-circle-outline" />
                <Left>
                  <Body>
                    <Text>Help Center</Text>
                    <Text note style={styles.ListNote}>Find the best answer to your questions</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan} />
                </Right>
              </ListItem>
              <ListItem button>
                <Icon name="ios-lock-outline" />
                <Left>
                  <Body>
                    <Text>Password & Security</Text>
                    <Text note style={styles.ListNote}>Enhance your account's security</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan}/>
                </Right>
              </ListItem>
              <ListItem button>
                <Icon name="ios-settings-outline" />
                <Left>
                  <Body>
                    <Text>Settings</Text>
                    <Text note style={styles.ListNote}>View and set tour account preferences</Text>
                  </Body>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan}/>
                </Right>
              </ListItem>
            </List>

            <List style={styles.ListView}>
              <ListItem button>
                <Icon name="ios-exit-outline" />
                <Left>
                  <Text> Log Out</Text>
                </Left>
                <Right>
                  <Icon name="ios-arrow-forward" style={styles.PanahKanan}/>
                </Right>
              </ListItem>
            </List>

          </Container>
        </Content>
      </Container>
    )
  }
}



const styles = StyleSheet.create({
  PanahKanan:{
    color:'#00a8ff',
  },
  ListView: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 8,
    position: 'relative',
    bottom: 30,
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 4,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  },
  ListData: {
    fontSize: 11,
    color: 'gray',
  },
  ListNote: {
    fontSize: 12,
  },
})