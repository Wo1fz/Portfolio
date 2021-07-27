import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section nopadding id='projects'>
    <br />
    <br />
    <br />
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects
        .map(({ id, image, title, description, tags, page, code }) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <br />
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              {code && (
                <ExternalLinks href={code} target='_blank'>
                  Code
                </ExternalLinks>
              )}
              {page && (
                <ExternalLinks href={page} target='_blank'>
                  Webpage
                </ExternalLinks>
              )}
            </UtilityList>
          </BlogCard>
        ))
        .reverse()}
    </GridContainer>
  </Section>
)

export default Projects
