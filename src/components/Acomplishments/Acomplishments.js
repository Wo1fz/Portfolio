import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'
import { accomplishments } from '../../constants/constants'

const Acomplishments = () => (
  <Section>
    <br />
    <br />
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {accomplishments
        .map((card, index) => (
          <Box key={index}>
            <BoxNum>{card.title}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))
        .reverse()}
    </Boxes>
  </Section>
)

export default Acomplishments
