import React from 'react'
import { Image } from 'react-native'
import { Card, CardItem, Left, Body, Right, Button, Icon, Text } from 'native-base'

class RecipeCard extends React.Component {
  state = {
    leftIconState: this.props.iconLeft + 'o',
    centerIconState: true,
    rightIconState: this.props.iconRight + 'o'
  }

  render() {
    const { imageUrl, iconLeft, iconRight, iconCenter } = this.props;
    const { leftIconState, centerIconState, rightIconState } = this.state;

    return (
      <Card>
        <CardItem>
          <Image source={{ uri: imageUrl }} style={{ height: 200, width: null, flex: 1 }} />
        </CardItem>
        <CardItem>
          <Left>
            <Icon
              type="AntDesign"
              onPress={() => this.setState({ leftIconState: leftIconState.includes('o') ? iconLeft : iconLeft + 'o' })}
              name={leftIconState}
              style={{ color: "red" }}
            />
          </Left>
          <Body>
            <Icon active={centerIconState} name={iconCenter} />
            <Text>Comment</Text>
          </Body>
          <Right>
            <Icon
              type="AntDesign"
              name={rightIconState}
              onPress={() => this.setState({ rightIconState: rightIconState.includes('o') ? iconRight : iconRight + 'o' })}
              style={{ color: "yellow", fontSize: 30 }}
            />
          </Right>
        </CardItem>
      </Card>
    )
  }
}

export default RecipeCard;