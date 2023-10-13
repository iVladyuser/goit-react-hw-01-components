import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 40px auto;
  width: 350px;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  justify-content: start;
  align-items: center;
  gap: 15px;
  padding: 15px;
  border-radius: 4px;
  overflow: hidden;
  background-color: #f5deb3;
  box-shadow: rgb(32 32 32) 0 0px 10px 2px;
`;

export const Status = styled.p`
  font-size: 30px;
`;

export const Avatar = styled.img`
  width: 60px;
`;

export const Name = styled.p`
  font-size: 16px;
`;