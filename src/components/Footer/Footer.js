import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel: +60177225237'>+60177225237</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto: nmy_97@hotmail.com'>
            nmy_97@hotmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Success is not final. Failure is not fatal. It is the courage to
            continue that counts.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons
            href='https://www.linkedin.com/in/ng-ming-yao-265131208/'
            target='_blank'
          >
            <AiFillLinkedin size='3rem' />
          </SocialIcons>
          <SocialIcons href='https://github.com/Wo1fz' target='_blank'>
            <AiFillGithub size='3rem' />
          </SocialIcons>
          <SocialIcons
            href='https://www.instagram.com/mingyao_ngg/'
            target='_blank'
          >
            <AiFillInstagram size='3rem' />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  )
}

export default Footer
