import React from 'react'
import { View , Image , ScrollView , StyleSheet } from 'react-native'
import { Thumbnail, Text , Left, Right, List, ListItem, Body } from 'native-base'

const SlideEat = ()=> {
  return(
      <View>

          {/* Image Eat */}

        <View>
          <List>
            <ListItem noBorder>
              <Left>
              <Body>
                <Text style={styles.Title}>Where To Eat ?</Text>
                <Text note style={{fontSize:12}}>Find our selection of restaurants in your city</Text>
              </Body>
              </Left>
              <Right>
                <Text style={{ color: '#0984e3' }}>></Text>
              </Right>
            </ListItem>
          </List>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View
            style={styles.ViewContainer}>
                <View style={{marginLeft:10}}>
                  <Image
                    source={{ uri:'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}}
                    style={styles.ImageEat}/>
                  <Text>5 Makan terenak dari Lombok</Text>
                  <Text note>bisa dibungkus</Text>  
                </View>
                <View style={{marginLeft:10}}>
                  <Image
                    source={{ uri:'https://images.pexels.com/photos/5938/food-salad-healthy-lunch.jpg?auto=compress&cs=tinysrgb&h=650&w=940'}}
                    style={styles.ImageEat}/>
                  <Text>5 Makan terenak untuk diet</Text>
                  <Text note>bisa dibungkus</Text>  
                </View>
                <View style={{marginLeft:10, marginRight:10,}}>
                  <Image
                    source={{ uri:'https://images.pexels.com/photos/76093/pexels-photo-76093.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'}}
                    style={styles.ImageEat}/>
                  <Text>5 Makan terenak Nusantara</Text>
                  <Text note>bisa dibungkus</Text>  
                </View>
            </View>
          </ScrollView>
      </View>

        {/* Ideas for weekends */}


      <View>
        <List>
          <ListItem noBorder>
          <Left>
            <Body>
              <Text>Ideas For Your Weekend</Text>
              <Text note>Find fun things to do in these top cities</Text>
            </Body>
          </Left>
          </ListItem>
        </List>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={styles.ViewContainer}>
            <View style={{ marginLeft: 10 }}>
              <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2014/03/11/22/56/wellness-285587_960_720.jpg' }}
                style={{ height: 180, width:350, borderRadius: 5, }} />
              <View style={{position:'absolute', left:20, top:10,}}>
                 <Text style={{fontWeight:'bold', fontSize:30,color:'white'}}>Spa</Text>
                 <Text style={{fontWeight:'bold', fontSize:15,color:'white'}}>Solo</Text>
               </View>
              <View style={{ width:350, borderRadius: 5,}}>
                <Text>Get Pampered Like a Royal</Text>
                <Text note style={{color:'black', fontSize:11,}}>Let Solo charm you with its famous traditional royal spa treatments.</Text>
               </View>
            </View>
            <View style={{ marginLeft: 10 }}>
              <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2015/03/19/23/03/divers-681516_960_720.jpg' }}
                style={{ height: 180, width:350, borderRadius:5, }} />
               <View style={{ position: 'absolute', left: 20, top:10, }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Exotic Island</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Lombok</Text>
               </View>
              <View style={{  width:350 }}>
                <Text>Tropical Gateaway</Text>
                <Text note style={{color:'black', fontSize:11,}}>A relaxing beach trip on fun or fun adventures, find them all in Lombok.</Text>
              </View>
            </View>
            <View style={{ marginLeft: 10, marginRight: 10,}}>
              <Image
                source={{ uri: 'https://cdn.pixabay.com/photo/2018/06/10/17/39/market-3466906_960_720.jpg' }}
                style={{ height: 190, width:350, borderRadius: 5, }} />
              <View style={{ position: 'absolute', left: 20, top:10,  }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'white' }}>Culture Vultures</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white' }}>Bangkok</Text>
              </View>
              <View style={{  width:350}}>
                <Text>For a Colorful Holiday</Text>
                <Text note style={{color:'black', fontSize:11,}}>Immerse yourself in Bangkok's mesmerizing culture with these activities.</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

        {/* Most Popular */}

      <View>
        <List>
          <ListItem noBorder>
            <Body>
              <Text>Most Popular Attractions</Text>
              <Text note>Fun holidays guaranteed</Text>
            </Body>
          </ListItem>
        </List>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={styles.ViewContainer}
          >
            <View
              style={{ flexDirection: 'column', paddingRight:40 }}>
              <List>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://yukk.co.id/blog/wp-content/uploads/2018/01/Master-oke-Foto-housing-estate.com_.jpg' }} />
                  <Text style={styles.TextPopular}>1</Text>
                  <Body>
                    <Text>Bintaro Xchange Ice Rink</Text>
                    <Text note>South Tangerang, Banten</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://www.bing.com/th?id=OIP.N3Wpz4UfZ3SscnGbfiAc7wHaE8&pid=Api' }} />
                  <Text style={styles.TextPopular}>2</Text>
                  <Body>
                    <Text>Trans Studio Makassar</Text>
                    <Text note>Makassar, South Sulawesi</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://tourmountbromo.com/wp-content/uploads/2017/11/suroboyo-carnival-park-day.jpg' }} />
                  <Text style={styles.TextPopular}>3</Text>
                  <Body>
                    <Text>Suroboyo Carnival Park</Text>
                    <Text note>Surabaya, East Java</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
            <View
              style={{ flexDirection: 'column' }}>
              <List>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://www.lokopoko.travel/wp-content/uploads/2015/09/madame_Tussade.jpg' }} />
                  <Text style={styles.TextPopular}>1</Text>
                  <Body>
                    <Text>Madame Tussauds Bangkok</Text>
                    <Text note>Bangkok, Thailand</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://image.travelog.com/PImage/o_1b8rdbobckfr1qhfulam2tciu7.jpg' }} />
                  <Text style={styles.TextPopular}>2</Text>
                  <Body>
                    <Text>Peak Tram and Sky Terrace</Text>
                    <Text note>Central, Hong Kong</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Thumbnail square source={{ uri: 'https://3.bp.blogspot.com/_6xz3nsl2C40/TDKe_vuUUII/AAAAAAAAB9c/NQ7HFej6HyU/s1600/disney-travelog9.jpg' }} />
                  <Text style={styles.TextPopular}>3</Text>
                  <Body>
                    <Text>Tokyo Disneyland</Text>
                    <Text note>Tokyo Japan</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Popular Destination */}

      <View>
        <List>
          <ListItem noBorder>
            <Left>
              <Body>
                <Text style={styles.Title}>Popular Destinations</Text>
                <Text note>Where are Travelkita users travveling next?</Text>
              </Body>
              <Right>
                <Text style={{ color: '#0984e3' }}>></Text>
              </Right>
            </Left>
          </ListItem>
        </List>
        <View>
          <View style={styles.ViewContainer}>
            <View style={{paddingRight:5, paddingBottom:5}}>
              <Image 
              source={{ uri:'https://2.bp.blogspot.com/-9Gbh1o9y6No/VX6idf5VgzI/AAAAAAAAHDA/QQwE4gOCdrQ/s1600/bandung-cfn-10.jpg'}}
              style={styles.ImageDestination}/>
              <Text style={styles.TextDestination}>Bandung</Text>
            </View>
            <View>
              <Image
                source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.7n67iq041jU_J7nT2uEi-AHaLH&pid=Api' }}
                style={styles.ImageDestination} />
              <Text style={styles.TextDestination}>Bromo</Text>
            </View>   
          </View>
          <View style={styles.ViewContainer}>
            <View style={{paddingRight:5}}>
              <Image 
                source={{ uri:'https://thetravelintern.com/wp-content/uploads/2017/08/Yogyakarta-Itinerary-20.jpg'}}
                style={styles.ImageDestination}/>
              <Text style={styles.TextDestination}>Yogyakarta</Text>
            </View>
            <View>
              <Image
                source={{ uri: 'https://4.bp.blogspot.com/-VkUOe4HhAWM/TwMHVwDgGLI/AAAAAAAABWQ/ijpbPKdpXPo/s1600/dieng-plateau4-665x1024.jpg' }}
                style={styles.ImageDestination} />
              <Text style={styles.TextDestination}>Dieng</Text>
            </View>   
          </View>
        </View>
      </View>

        {/* Go Beyond */}

      <View>
        <View>
          <List>
            <ListItem noBorder>
              <Body>
                <Text style={styles.Title}>Go Beyond</Text>
                <Text note>Plan your travel easily with our destination guide</Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </View>
      <View style={[styles.ViewContainer,{paddingBottom:5,}]}>
        <Image 
        source={require('../../img/goBeyond/1.jpg')}
        style={{height:180,width:370, borderRadius:5,}}/>
      </View>
      <View style={styles.ViewContainer}>
        <View style={{paddingRight:5,}}>
          <Image 
          source={require('../../img/goBeyond/2.jpg')}
          style={{height:90,width:183, borderRadius:5}}/>
        </View>
        <View>
          <Image 
          source={require('../../img/goBeyond/3.jpg')}
          style={{height:90,width:183, borderRadius:5}}/>
        </View>
      </View>

      {/* Travel Pop Quiz */}

      <View style={{ backgroundColor:'#f1c40f', top:30, paddingBottom:50,}}>
        <List>
          <ListItem>
            <Body>
              <Text style={styles.Title}>Travelkita Pop Quiz</Text>
              <Text note style={{color:'#000'}}>Pick a topic and see how much you know</Text>
            </Body>
          </ListItem>
        </List>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.ViewContainer]}>
            <View style={{ paddingLeft:10, paddingRight:10}}>
              <Image 
              source={require('../../img/pop/1.png')}
              style={{height:150, width:300, borderRadius:5}}/>
            </View>
            <View>
              <Image 
              source={require('../../img/pop/2.png')} 
              style={{height:150,width:300, borderRadius:5,}}/>
            </View>
            <View style={{ paddingLeft:10, paddingRight:10}}>
              <Image 
              source={require('../../img/pop/3.png')} 
              style={{height:150, width:300, borderRadius:5}}/>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* travel travia */}

      <View style={{ top: 30, paddingBottom: 50, }}>
        <List>
          <ListItem noBorder>
            <Body>
              <Text style={styles.Title}>Travel Trivia</Text>
              <Text note>Bits and pieces to enrich your traveling</Text>
            </Body>
          </ListItem>
        </List>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.ViewContainer]}>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Image
                source={require('../../img/trivia/1.png')}
                style={{ height: 150, width: 300, borderRadius: 5 }} />
            </View>
            <View>
              <Image
                source={require('../../img/trivia/2.png')}
                style={{ height: 150, width: 300, borderRadius: 5, }} />
            </View>
            <View style={{ paddingLeft: 10, paddingRight: 10 }}>
              <Image
                source={require('../../img/trivia/3.png')}
                style={{ height: 150, width: 300, borderRadius: 5 }} />
            </View>
          </View>
        </ScrollView>
      </View>

      <View>
        <Body>
          <Text note>Come back again later for new inspiring stories!</Text>
        </Body>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  ViewContainer:{
    flexDirection: 'row',
    justifyContent:'center'

  },
  Title:{
    fontSize: 20, 
    fontWeight: 'bold',
  },
  ImageEat:{
    height: 250, 
    width: 300,
    borderRadius: 5
  },
  TextPopular:{
    color: '#fff', 
    backgroundColor: '#000',
    borderRadius: 100,
    position: 'absolute',
    width: 20,
    height: 20,
    textAlign: 'center',
    top: 16,
  },
  ImageDestination:{
    width: 180, 
    height: 250, 
    borderRadius: 5,
  },
  TextDestination:{
    position:'absolute',
    color:'#fff',
    fontWeight:'bold',
    left:15,
    top:20,
    fontSize:20,
  },
})

export default SlideEat