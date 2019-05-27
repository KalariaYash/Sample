import React from 'react'
import { Container, Content, Header } from "native-base";
import { createDrawerNavigator, DrawerItems, createAppContainer } from 'react-navigation'
import HomeScreen from './src/Components/homeScreen'

class App extends React.Component {
  render() {
    return (
      <MApp />
    );
  }
}

const CustomDrwerContentComponent = (props) => (

  <Container onPress={() => this.props.navigation.closeDrawer()}>
    <Header style={{ height: 200 }}>
      <Content>
        <DrawerItems {...props} />
      </Content>
    </Header>
  </Container>
)

const MyApp = createDrawerNavigator({
  "Home": {
    screen: HomeScreen
  }
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrwerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
  });

const MApp = createAppContainer(MyApp);
export default App;