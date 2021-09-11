import React from 'react'
import { useI18n } from '../../hooks/i18n'

import { Container, Flag } from './styles'

import pt from '../../assets/pt.png'
import en from '../../assets/en.png'
import es from '../../assets/es.png'

const Language = () => {
  const { changeLanguage, currlanguage } = useI18n()

  const handleLanguage = (language) => {
    changeLanguage(language)
  }

  const handleSelected = (language) => {
    return currlanguage === language
  }

  return (
    <Container>
      <Flag 
        src={pt} 
        alt="Portuguese" 
        onClick={() => handleLanguage('pt')} 
        isSelected={handleSelected('pt')}
      />
      <Flag 
        src={en} 
        alt="English" 
        onClick={() => handleLanguage('en')} 
        isSelected={handleSelected('en')}
      />
      <Flag 
        src={es} 
        alt="Spanish" 
        onClick={() => handleLanguage('es')} 
        isSelected={handleSelected('es')}
      />
    </Container>
  )
}

export default Language