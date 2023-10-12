import React from 'react';

import {
  StatList,
  StatisticCard,
  Title,
  Item,
  Label,
  Percentage,
} from './Statistics.styles';
import { colors } from './randomColors';
const Statistics = ({ title, stats }) => {
  return (
    <StatisticCard>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{
              backgroundColor: colors[(Math.random() * colors.length) ^ 0],
            }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </StatisticCard>
  );
};

export default Statistics;
