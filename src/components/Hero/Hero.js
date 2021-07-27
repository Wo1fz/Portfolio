import React from 'react'

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome ⋆ 欢迎 <br />
        Selamat Datang
      </SectionTitle>
      <SectionText>
        A freshly graduated Computer Science student who's passionate about
        learning new things and thrive on meeting challenges.
      </SectionText>
      <Button onClick={() => (window.location = '#about')}>Learn More</Button>
    </LeftSection>
  </Section>
)

export default Hero
