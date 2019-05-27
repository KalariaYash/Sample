import React from 'react'
import { Text, Header, Left, Icon, Body, Right } from 'native-base'

const CommonHeader = (props) => {
  return (
    <Header>
      <Left>
        <Icon name={props.iconName} onPress={props.onClick} />
      </Left>
      <Body >
        <Text>{props.title}</Text>
      </Body>
      <Right>
        <Icon name="search" />
      </Right>
    </Header>
  );
}
export default CommonHeader;