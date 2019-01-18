import React, { Component } from 'react'
import { Container , Content } from 'native-base'

import Headers from '../component/home/Headers'
import Profiles from '../component/home/Profiles'
import ContentIcon from '../component/home/ContentIcon'
import SlidePromo from '../component/home/SlidePromo'
import SlideBioskop from '../component/home/SlideBioskop'
import SlideEat from '../component/home/SlideEat'

export default class Home extends Component{
  render(){
    return(
      <Container>
        {/* Headers */}
        <Headers/>
        <Content>
          {/* Profile points */}
          <Profiles/>
          {/* Icon list */}
          <ContentIcon/>
          {/* image slide promo */}
          <SlidePromo/>
          {/* Film Bioskop */}
          <SlideBioskop/>
          {/* slide eat */}
          <SlideEat/>
          </Content>
      </Container>
    )
  }
}
