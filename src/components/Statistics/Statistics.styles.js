import { styled } from 'styled-components';

export const StatisticCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 400px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #fff;
`;

export const Title = styled.h2`
  padding: 15px 0;
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: red;
`;

export const StatList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #b0c4de;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  width: 20%;
`;

export const Label = styled.p`
  margin-bottom: 5px;
  color: #fff;
  font-size: 18px;
`;

export const Percentage = styled.p`
  margin-bottom: 5px;
  font-size: 20px;
  color: #fff;
  font-weight: 600;
`;
