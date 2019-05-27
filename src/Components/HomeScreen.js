import React from 'react'
import { Container, ScrollableTab, Tab, Tabs, Text,Content } from 'native-base';
import CommonHeader from './CommonHeader'
import { TITLE, category } from '../Config/constant'
import RecipeCard from './RecipeCard'

const HomeScreen = (props) => {
  return (
    <Container  >
      <CommonHeader
        onClick={() => props.navigation.openDrawer()}
        title={TITLE}
        iconName='menu'
      />

      <Tabs renderTabBar={() => <ScrollableTab />}>

        {category.map((cat) => {
          return (<Tab heading={cat}>
            <Text>Content</Text>
          </Tab>)
        })}

      </Tabs>
      <Content>
          <RecipeCard 
          iconCenter="chatbubbles"
          iconRight="star"
          iconLeft="heart"
          imageUrl="https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/sausage-mustard-apple-hash.jpg?itok=s_ogptW5" />
      </Content>

    </Container>
  );
}

export default HomeScreen;