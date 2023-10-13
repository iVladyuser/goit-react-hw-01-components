import React from 'react';
import { List } from './FriendList.styles';
import FriendItem from './FriendItem';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, name, avatar, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </List>
  );
};

export default FriendList;


