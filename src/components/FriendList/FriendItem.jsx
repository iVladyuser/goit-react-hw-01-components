import { Item, Status, Avatar, Name } from './FriendList.styles';

const FriendItem = ({ avatar, name, isOnline }) => {
  return (
    <Item>
      <Status style={{ color: isOnline ? 'green' : 'red' }}> &#9679;</Status>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};

export default FriendItem;
