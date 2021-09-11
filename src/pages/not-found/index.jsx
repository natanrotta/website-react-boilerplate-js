import React from 'react'

import { Wrapper, Image } from './styles'

import notFoundImage from '../../assets/404.gif'

const NotFound = () => {
    
  return (
    <Wrapper>
      <Image src={notFoundImage} alt="NotFound"/>
    </Wrapper>
  )
}

export default NotFound