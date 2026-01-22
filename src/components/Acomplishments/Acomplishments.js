import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 3, text: 'Years of Experience' },
  { number: 'GitHub', text: 'github.com/PFMP256', isLink: true },
  { number: 'English', text: 'Conversational', },
  { number: 'Education', text: 'Academlo', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Highlights</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{typeof card.number === 'number' ? `${card.number}+` : card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
