import React from 'react'
import { Container, ScrollableTab, Tab, Tabs, Text } from 'native-base';
import CommonHeader from './CommonHeader'
import { TITLE, category } from '../Config/constant'

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

    </Container>
  );
}

export default HomeScreen;