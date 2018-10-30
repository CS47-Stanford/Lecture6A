import { createStackNavigator } from 'react-navigation'

import SampleContentScreen from '../Screens/SampleContentScreen'
import AnotherSampleContentScreen from '../Screens/AnotherSampleContentScreen'

const StackNav = createStackNavigator({
  SampleContentScreen: { screen: SampleContentScreen },
  AnotherSampleContentScreen: { screen: AnotherSampleContentScreen },
}, {
  headerMode: 'float',
  initialRouteName: 'SampleContentScreen',

  navigationOptions: ({navigation}) => {

    let navTitle = 'Sample Content';
    if (navigation.state.params) {
      navTitle = navigation.state.params.title || navTitle;
    }

    return {
      title: navTitle,
    }
  }
});

export default StackNav;
