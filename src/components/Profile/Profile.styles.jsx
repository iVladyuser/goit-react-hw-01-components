import { styled } from 'styled-components';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
  width: 400px;
  border-radius: 4px;
  overflow: hidden;

  background-color: #f5deb3;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 350px;
  margin: 0 auto;
  background-color: #fff;
  height: auto;
`;

export const Avatar = styled.img`
  margin-bottom: 20px;
  width: 120px;
  border-radius: 50%;
  overflow: hidden;
  background-color: #bdb76b;
`;

export const Name = styled.p`
  margin-bottom: 2px;
  font-size: 26px;
`;

export const Tag = styled.p`
  margin-bottom: 2px;
  font-size: 15px;
  color: grey;
`;

export const Location = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
  color: grey;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 30%;
  &:not(:last-child) {
    border-right: 1px solid black;
  }

`;

export const Label = styled.span`
  color: grey;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 18px;
`;

export const Quantity = styled.span`
  color: black;
  font-weight: 600;
  font-size: 20px;
`;
