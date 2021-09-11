import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import { StyledSwitch } from './styles'

const Switch = ({ toggle }) => {
  const { colors, title } = useContext(ThemeContext)
  return (
    <StyledSwitch 
      className="react-switch"
      onChange={toggle}
      checked={title === 'dark'}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={20}
      offColor="#f3f3f3"
      onColor={colors.secundary}
    />
  )
}

export default Switch