import React from 'react'

import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const data = [
  { title: '', text: 'Student Volunteer @ RoboCup Singapore Open' },
  {
    text: 'Participants of RoboCup World Championship 2016',
  },
  {
    title: '',
    text: 'Director of Events @ Malaysian Community in SIM (MCSIM)',
  },
  { title: '', text: 'Impart Award by Student Development @ SIM' },
]

const Acomplishments = () => (
  <Section>
    <br />
    <br />
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data
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
