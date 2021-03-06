import React from 'react'
import { DiFirebase, DiReact, DiTerminal } from 'react-icons/di'
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <br />
    <br />
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've been learning a range of technologies both from the university and
      self-learning.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML & CSS, React.js
            <br />
            Vue.js, Tailwind and React Native
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js, Spring Boot,
            <br />
            Firebase Firestore and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size='3rem' />
        <ListContainer>
          <ListTitle>OOP</ListTitle>
          <ListParagraph>
            Experience with <br />
            Java and C++
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
