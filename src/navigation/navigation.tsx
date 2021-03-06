import React, { FC } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Hell, Home, Heaven, AppEbikeFake, Hell2 } from '@screens'

const AppStack = createStackNavigator()

type AppNavigationProps = {}

const AppNavigation: FC<AppNavigationProps> = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen name={'Home'} component={Home} />
        <AppStack.Screen name={'Hell'} component={Hell} />
        <AppStack.Screen name={'Heaven'} component={Heaven} />
        <AppStack.Screen name={'AppEbikeFake'} component={AppEbikeFake} />
        <AppStack.Screen name={'Hell2'} component={Hell2} />
      </AppStack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
