import React from 'react';
import { Image } from 'react-native'
import { Container, Content, H1, H3, List, ListItem, Text, View } from 'native-base';

const RecipeDetail = (props) => {
  return (
    <Container>
      <Content>
        <Image source={{ uri: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/sausage-mustard-apple-hash.jpg?itok=s_ogptW5" }} style={{ height: 200, width: null, flex: 1 }} />
        <H1 style={{ padding: 10 }}>Recipe Name</H1>
        <H3>Ingredients</H3>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
          <Text>Chocolate</Text>
          <Text>1 table spoon</Text>
        </View>
        <List>
          <ListItem itemDivider>
            <Text>Step-1</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-2</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-3</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-4</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-1</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-2</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-3</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>Step-4</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default RecipeDetail;