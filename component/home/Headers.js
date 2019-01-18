import React from 'react'
import { Header , Body ,  Right , Content , Thumbnail , Icon } from 'native-base'

const Headers = () => {
  return (
    <Header androidStatusBarColor='#00a8ff' style={{ backgroundColor: '#00a8ff', }}>
      <Body>
        <Content>
          <Thumbnail
            source={{ uri: 'http://press.traveloka.com/wp-content/uploads/2015/08/Traveloka_Secondary_Logo.png' }}
            style={{ width: 120, }} />
        </Content>
      </Body>
      <Right>
        <Icon name="md-more" style={{ color: "white", right: 20, }} />
      </Right>
    </Header>
  )
}

export default Headers